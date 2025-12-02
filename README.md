# interactive touchscreen kiosk

This repository offers touchscreen user-interface templates for interactive kiosk displays. Please fork repository and comment/push useful changes upstream.  

## System Considerations

Host your project online. GitHub won't host videos and you probably don't want to host them on YouTube (YouTube may provide users a kiosk exit). You can host your videos on your Pitt Linux server. 

-For our project presentations, you'll run your project on either a Lenovo Duet Touchscreen Chromebook or a Lenovo 110e. We'll profile the best projects for public viewing on a dedicated ACER T272HL display. 


## **Hardware/Software Requirements**

### ACER T272HL LCD Touchscreen Monitor

* 1920x1080
* HDMI Cable
* USB Keyboard Cable

Test your site using 16:9 testtool.html (see below)

### Google Chrome OS

We will use "Kiosk Chrome App" to run your website on the touchscreenkiosk. This tool locks down the user experience for the viewer. It will also limit you to normal Google Chrome Broweser constraints (ie. music will not play automatically on page load.) 

[Kiosk Chrome App](https://chrome.google.com/webstore/detail/kiosk/afhcomalholahplbjhnmahkoekoijban)

[Instructional Video](https://youtu.be/M5US4OcVnL4) 


### 16x9 Test Tool

This toolkit includes, **16x9testtool.html**, a useful tool you can use to ensure your site adheres to 16:9 screen ratio constraint. 


## Useful Code Snippets
 
 Sorry. At the moment, image carousel requires either auto-play or user controls. See [W3 carousel tutorial](https://www.w3schools.com/howto/howto_js_slideshow.asp).  
 
 **Time-out function**

```
<!--Place within <HEAD></HEAD>. Refreshes index.html after 180 seconds-->
  <meta http-equiv="refresh" content="180;url=index.html"> 
```
 
**Stop video from playing in modal window.** 
``` 
 </script>


 <!-- Stops video/audio from playing on modal close -->
  <script>
  $(function(){
  $("body").on('hidden.bs.modal', function (e) {
  var $iframes = $(e.target).find("iframe");
  $iframes.each(function(index, iframe){
  $(iframe).attr("src", $(iframe).attr("src"));
  });
  });
  });
  </script>
```
 
**Fade-in Animation**
```
  <style>
    body {
        animation: fadeInAnimation ease 3s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
    @keyframes fadeInAnimation {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>  
```

## Embeds and other tools that you might find interesting

[JS3 Timeline](https://timeline.knightlab.com/#make)

[Popular web tools that can be embedded](https://help.edublogs.org/popular-web-tools-that-can-be-embedded/)




