package com.hongik.union.config;

import io.lettuce.core.ClientOptions;
import io.lettuce.core.SslOptions;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.RedisStandaloneConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceClientConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.core.StringRedisTemplate;

import java.net.URI;

@Configuration
public class RedisConfig {

    @Value("${UPSTASH_REDIS_URL}")
    private String redisUrl;

    @Bean
    public RedisConnectionFactory redisConnectionFactory() throws Exception {
        URI uri = new URI(redisUrl);
        boolean isSsl = uri.getScheme().equals("rediss");

        RedisStandaloneConfiguration serverConfig = new RedisStandaloneConfiguration();
        serverConfig.setHostName(uri.getHost());
        serverConfig.setPort(uri.getPort() == -1 ? (isSsl ? 6380 : 6379) : uri.getPort());

        if (uri.getUserInfo() != null) {
            String[] parts = uri.getUserInfo().split(":", 2);
            if (parts.length == 2) {
                serverConfig.setUsername(parts[0]);
                serverConfig.setPassword(parts[1]);
            }
        }

        LettuceClientConfiguration.LettuceClientConfigurationBuilder builder =
                LettuceClientConfiguration.builder();

        if (isSsl) {
            builder.useSsl().disablePeerVerification();
        }

        return new LettuceConnectionFactory(serverConfig, builder.build());
    }

    @Bean
    public StringRedisTemplate stringRedisTemplate(RedisConnectionFactory factory) {
        return new StringRedisTemplate(factory);
    }
}
