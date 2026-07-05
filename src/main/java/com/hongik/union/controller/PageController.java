package com.hongik.union.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping("/") public String index() { return "index"; }

    @GetMapping("/about/intro")    public String aboutIntro()    { return "about/intro"; }
    @GetMapping("/about/work")     public String aboutWork()     { return "about/work"; }
    @GetMapping("/about/org")      public String aboutOrg()      { return "about/org"; }
    @GetMapping("/about/location") public String aboutLocation() { return "about/location"; }
    @GetMapping("/about/rules")    public String aboutRules()    { return "about/rules"; }

    @GetMapping("/clubs/central")         public String clubsCentral()        { return "clubs/central"; }
    @GetMapping("/clubs/central/{id}")    public String clubsCentralDetail()  { return "clubs/central-detail"; }
    @GetMapping("/clubs/provisional")     public String clubsProvisional()    { return "clubs/provisional"; }
    @GetMapping("/clubs/provisional/{id}") public String clubsProvisionalDetail() { return "clubs/provisional-detail"; }
    @GetMapping("/clubs/location")        public String clubsLocation()       { return "clubs/location"; }

    @GetMapping("/news/notices")   public String newsNotices()   { return "news/notices"; }
    @GetMapping("/news/calendar")  public String newsCalendar()  { return "news/calendar"; }
    @GetMapping("/news/minutes")   public String newsMinutes()   { return "news/minutes"; }
    @GetMapping("/news/clubs")     public String newsClubs()     { return "news/clubs"; }

    @GetMapping("/info/rules")         public String infoRules()        { return "info/rules"; }
    @GetMapping("/info/forms")         public String infoForms()        { return "info/forms"; }
    @GetMapping("/info/activity-cert") public String infoActivityCert() { return "info/activity-cert"; }
    @GetMapping("/info/club-cert")     public String infoClubCert()     { return "info/club-cert"; }
    @GetMapping("/info/penalty")       public String infoPenalty()      { return "info/penalty"; }

    @GetMapping("/election/intro")    public String electionIntro()    { return "election/intro"; }
    @GetMapping("/election/announce") public String electionAnnounce() { return "election/announce"; }

    @GetMapping("/contact/faq")  public String contactFaq()  { return "contact/faq"; }
    @GetMapping("/contact/ask")  public String contactAsk()  { return "contact/ask"; }
    @GetMapping("/contact/qna")  public String contactQna()  { return "contact/qna"; }

    @GetMapping("/admin") public String admin() { return "admin/index"; }
}
