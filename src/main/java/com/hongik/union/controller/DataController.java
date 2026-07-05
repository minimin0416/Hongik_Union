package com.hongik.union.controller;

import com.hongik.union.service.RedisService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/data")
@CrossOrigin(origins = "*")
public class DataController {

    private final RedisService redisService;

    public DataController(RedisService redisService) {
        this.redisService = redisService;
    }

    // GET /api/data?key=xxx  →  값 조회
    @GetMapping
    public ResponseEntity<?> get(@RequestParam String key) {
        String value = redisService.get(key);
        return ResponseEntity.ok(value);
    }

    // POST /api/data  →  값 저장
    // body: { "key": "xxx", "value": "yyy" }
    @PostMapping
    public ResponseEntity<?> set(@RequestBody Map<String, String> body) {
        String key = body.get("key");
        String value = body.get("value");
        redisService.set(key, value);
        return ResponseEntity.ok(Map.of("ok", true));
    }
}
