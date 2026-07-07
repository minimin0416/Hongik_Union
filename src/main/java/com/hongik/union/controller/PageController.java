package com.hongik.union.controller;

import com.hongik.union.service.SiteContentService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Map;

@Controller
public class PageController {

    private final SiteContentService data;

    public PageController(SiteContentService data) {
        this.data = data;
    }

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("notices", data.getNotices());
        model.addAttribute("bannerImages", data.getBanners());
        model.addAttribute("calendarEvents", data.getCalendarEvents());
        model.addAttribute("locationImage", data.getLocationImage());
        return "index";
    }

    @GetMapping("/about/intro")    public String aboutIntro()    { return "about/intro"; }
    @GetMapping("/about/work")     public String aboutWork()     { return "about/work"; }

    @GetMapping("/about/org")
    public String aboutOrg(Model model) {
        model.addAttribute("orgImage", data.getOrgImage());
        return "about/org";
    }

    @GetMapping("/about/location")
    public String aboutLocation(Model model) {
        model.addAttribute("locationImage", data.getLocationImage());
        return "about/location";
    }

    @GetMapping("/about/rules")    public String aboutRules()    { return "about/rules"; }

    @GetMapping("/clubs/central")
    public String clubsCentral(Model model) {
        model.addAttribute("clubs", data.getClubs());
        return "clubs/central";
    }

    @GetMapping("/clubs/central/{id}")
    public String clubsCentralDetail(@PathVariable long id, Model model) {
        model.addAttribute("club", findClub(data.getClubs(), id));
        return "clubs/central-detail";
    }

    @GetMapping("/clubs/provisional")
    public String clubsProvisional(Model model) {
        model.addAttribute("clubs", data.getProvisionalClubs());
        return "clubs/provisional";
    }

    @GetMapping("/clubs/provisional/{id}")
    public String clubsProvisionalDetail(@PathVariable long id, Model model) {
        model.addAttribute("club", findClub(data.getProvisionalClubs(), id));
        return "clubs/provisional-detail";
    }

    @GetMapping("/clubs/location")
    public String clubsLocation(Model model) {
        model.addAttribute("clubMapImage", data.getClubMapImage());
        return "clubs/location";
    }

    @GetMapping("/news/notices")
    public String newsNotices(Model model) {
        model.addAttribute("notices", data.getNotices());
        return "news/notices";
    }

    @GetMapping("/news/calendar")
    public String newsCalendar(Model model) {
        model.addAttribute("calendarEvents", data.getCalendarEvents());
        return "news/calendar";
    }

    @GetMapping("/news/minutes")
    public String newsMinutes(Model model) {
        model.addAttribute("minutes", data.getMinutes());
        return "news/minutes";
    }

    @GetMapping("/news/clubs")
    public String newsClubs(Model model) {
        model.addAttribute("clubNews", data.getClubNews());
        return "news/clubs";
    }

    @GetMapping("/info/rules")         public String infoRules()        { return "info/rules"; }

    @GetMapping("/info/forms")
    public String infoForms(Model model) {
        model.addAttribute("forms", data.getForms());
        return "info/forms";
    }

    @GetMapping("/info/activity-cert")
    public String infoActivityCert(Model model) {
        model.addAttribute("certFile", data.getActivityCertFile());
        return "info/activity-cert";
    }

    @GetMapping("/info/club-cert")
    public String infoClubCert(Model model) {
        model.addAttribute("certFile", data.getClubCertFile());
        return "info/club-cert";
    }

    @GetMapping("/info/penalty")
    public String infoPenalty(Model model) {
        model.addAttribute("penalties", data.getPenalties());
        return "info/penalty";
    }

    @GetMapping("/election/intro")    public String electionIntro()    { return "election/intro"; }

    @GetMapping("/election/announce")
    public String electionAnnounce(Model model) {
        model.addAttribute("announcements", data.getElection());
        return "election/announce";
    }

    @GetMapping("/contact/faq")  public String contactFaq()  { return "contact/faq"; }
    @GetMapping("/contact/ask")  public String contactAsk()  { return "contact/ask"; }

    @GetMapping("/contact/qna")
    public String contactQna(Model model) {
        model.addAttribute("inquiries", List.of());
        return "contact/qna";
    }

    @GetMapping("/admin") public String admin() { return "admin/index"; }

    private Map<String, Object> findClub(List<Map<String, Object>> clubs, long id) {
        return clubs.stream()
            .filter(c -> ((Number) c.get("id")).longValue() == id)
            .findFirst()
            .orElse(null);
    }
}
