---
layout: post  
title: "Apple's iOS 10.3.1 update: Important Security Patch"  
date:   2017-04-02 11:30:00 -0400  
categories: pages blog  
---

Apple released the iOS 10.3 update about a week ago (03/27/2017). If you missed out on what's new, check out this [blog post](http://wp.me/p7JhKF-mi) for more details.  

This update (or security patch) consists mainly of bug fixes and improvements. 


## Installation and Compatible Devices

iOS 10.3.1 is available for download as an _Over The Air_ ([OTA](https://en.wikipedia.org/wiki/Over-the-air_programming#Smartphones)) update for all:

* iPhone 5 or later
* iPad 4th Generation or later
* iPod Touch 6th Generation or later

> An over-the-air update is a software update that is distributed over Wi-Fi or mobile broadband instead of requiring the user to connect the device to a computer via USB to perform the update.  

The file size for this update, according to my device, is around 35 MB. So it's not too big of a download.  

It is also available via [iTunes](https://support.apple.com/en-us/HT204204).  


### Disclaimer

Before using either method, I highly recommend doing an iCloud backup of all your data (just in case). You can find the steps on how to do so [here](https://support.apple.com/en-us/HT203977).


## Issues addressed

- Stack buffer overflow which allowed a potential attacker to executing code on the Wifi chip. According to Security Focus: Failed exploit attempts will likely result in denial-of-service (DOS) conditions. The issue was discovered by Gal Beniamini — ‎Security Researcher in Google Project Zero

- Compatible 32-bit devices (such as the iPhone 5 and 5c, as well as the iPad 4th Generation) can now receive the iOS 10.3.1+ update as an OTA, not just via iTunes.

> Project Zero is the name of a team of security analysts employed by Google tasked with finding zero-day vulnerabilities. When bugs are found, these are reported to the manufacturer and are only made publicly visible once a patch has been released **or** if 90 days have passed without a patch being released.


## References

[About the security content of iOS 10.3.1](https://support.apple.com/en-us/HT207688)

[Over The Air: Exploiting Broadcom’s Wi-Fi Stack](https://googleprojectzero.blogspot.com/2017/04/over-air-exploiting-broadcoms-wi-fi_4.html)


## Outro

If you enjoyed this blog post or found it helpful in any way, make sure to follow me on Twitter to find out when a new one is available.

Twitter: [@giovanni0918](https://twitter.com/giovanni0918)

Github: [giovanni0918](https://github.com/giovanni0918)

Website: [giovanni-orlando.com](https://giovanni-orlando.com)