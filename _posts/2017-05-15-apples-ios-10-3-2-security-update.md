---
layout: post  
title: "Apple's iOS 10.3.2 Security Update: You Probably Shouldn't Skip It"  
date:   2017-05-15 11:30:00 -0400  
categories: pages blog  
---

On 05/15/2017, Apple released version 10.3.2 of their mobile operating system iOS. This is a minor release in terms of user features, yet big in terms of security.

## Installation and Compatible Devices

iOS 10.3.2 is available for download as an _Over The Air_ ([OTA](https://en.wikipedia.org/wiki/Over-the-air_programming#Smartphones)) update for all:

* iPhone 5 or later (There are rumors that this update may not be compatible with the existing 32-bit iOS devices. If this is so, the supported devices list may start from the iPhone 5s onwards. I will update this section of the blog post once it has been confirmed.)
* iPad 4th Generation or later
* iPod Touch 6th Generation or later

> An over-the-air update is a software update that is distributed over Wi-Fi or mobile broadband instead of requiring the user to connect the device to a computer via USB to perform the update.

The file size for this update, according to my device, is around 195 MB. So it's not too big of a download.

It is also available via [iTunes](https://support.apple.com/en-us/HT204204).

### Disclaimer

Before using either method, I highly recommend doing an iCloud backup of all your data (just in case). You can find the steps on how to do so [here](https://support.apple.com/en-us/HT203977).

## More than just Bug Fixes and Improvements

This update targets several vulnerabilities across different parts of the OS, such as:  

- AVEVideoEncoder, IOSurface, TextInput  
Addresses a memory corruption issue with improved memory handling, in order to prevent third party applications to gain [kernel](https://wiki-offline.jakearchibald.com/wiki/Kernel_(operating_system)) privileges.

- CoreAudio and Kernel  
Addresses a validation issue with improved [sanitization](https://wiki-offline.jakearchibald.com/wiki/Sanitization_(classified_information)), preventing third party applications from reading restricted memory.

- iBooks  
Fixes a URL handling issue through improved state management. Provides guarding against maliciously crafted books opening arbitrary websites without user permission. It also solves existing issue within the path validation logic for [symbolic links (symlinks)](https://wiki-offline.jakearchibald.com/wiki/Symbolic_link) via improved path sanitization. Protects from third party applications being able to execute arbitrary code with [root](https://wiki-offline.jakearchibald.com/wiki/Superuser) privileges.

- Kernel  
Addresses a [race condition](https://wiki-offline.jakearchibald.com/wiki/Race_condition) through improved locking. Prevents third party applications from executing arbitrary code with kernel privileges.

- Notifications  
Addresses a [denial of service (DoS)](https://wiki-offline.jakearchibald.com/wiki/Denial-of-service_attack) issue through improved memory handling. Reduces the likeliness of malicious applications succeeding in a DoS attack.

- Safari  
Solves an issue in the browser's history menu through improved memory handling, in favor of DoS protection.

- Security  
Updates the certificate trust policy.

- SQLite  
Fixes a "use after free" and a [buffer overflow](https://wiki-offline.jakearchibald.com/wiki/Buffer_overflow) issue, via improved memory management.
Enhances input validation.

- WebKit  
Adresses multiple memory corruption issues, via improved memory handling. As well as a logic issue which existed in the handling of:
  - WebKit Editor commands
  - container nodes
  - pageshow events
  - cached frames
  - frame loading

  It does this via improved state management.  

The [CVE](http://cve.mitre.org/about/) IDs for all the issues mentioned in this blog post can be found in Apple's article: [About the security content of iOS 10.3.2](https://support.apple.com/en-us/HT207798).  

## Outro

If you enjoyed this blog post or found it helpful in any way, make sure to follow me on Twitter to find out when a new one is available.

Twitter: [@giovanni0918](https://twitter.com/giovanni0918)

Github: [giovanni0918](https://github.com/giovanni0918)

Website: [giovanni-orlando.com](https://giovanni-orlando.com)