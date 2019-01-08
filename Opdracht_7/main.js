// Other methode to initialise jQuery object.
// $(function(){
$(document).ready(function(){
    /* On click: Enlarge the font (120%) */
        $("#instructions").children().first().click(function(){
            $("#content").css("font-size","120%");
        });
    /* On click: Decrease the font size (80%) */
        $("ol li:nth-child(2)").click(function(){
            $("#content").css("font-size","80%");
        });
    /* On click: Bold or normalize the green words */
        $("ol li:nth-child(3)").click(function(){
            $(".green").css("font-weight","Bold");
        });
        $("ol li:nth-child(3)").dblclick(function(){
            $(".green").css("font-weight","normal");
        });
    /* On click: Bold or normalize the green words */
        $("ol li:nth-child(4)").click(function(){
            $(".red").css("text-decoration","underline");
        });
        $("ol li:nth-child(4)").dblclick(function(){
            $(".red").css("text-decoration","none");
        });
    /* On click: Replace the logo with another image */
        $("ol li:nth-child(5)").hover(function(){
            $("img").attr("src","./images/koala.JPG");
        });
    /* On hover: Display the URL of links in a tooltip when hovering over links */
        $("a").hover(function(){
            $(this).prop("title", $(this).attr("href"));
        });
    /* On click: add "Chapter 1:" before the 1st title h2 and "Chapter 2:" before the 2nd title h2 */
        $("ol:last-child").click(function(){
            $("h2:first").prepend("Chapter 1: ");
            $("h2:eq(1)").prepend("Chapter 2: ");
        });
});