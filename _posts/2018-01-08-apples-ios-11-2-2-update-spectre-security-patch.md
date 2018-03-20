---
layout: post  
title: "Apple's iOS 11.2.2 Update: Spectre Security Patch"  
date:   2018-01-09 00:30:00 -0400  
categories: pages blog  
---

On 01/08/2017, Apple released version 11.2.2 of their mobile operating system iOS. This update includes security improvements to Safari and WebKit to mitigate the effects of Spectre.

## Installation and Compatible Devices

iOS 11.2.2 is available for download as an _Over The Air_ ([OTA](https://en.wikipedia.org/wiki/Over-the-air_programming#Smartphones)) update for all:

* iPhone 5s and later  
* iPad Air and later  
* iPod Touch 6th Generation and later  

> An over-the-air update is a software update that is distributed over Wi-Fi or mobile broadband instead of requiring the user to connect the device to a computer via USB to perform the update.

The file size for this update, according to my device, is around 65.7 MB. So it's not too big of a download.

It is also available via [iTunes](https://support.apple.com/en-us/HT204204).

### Disclaimer

Before using either method, I highly recommend doing an iCloud backup of all your data (just in case). You can find the steps on how to do so [here](https://support.apple.com/en-us/HT203977).

### What is Spectre

[Spectre](https://spectreattack.com/) is a hardware security vulnerability that forces programs on a user's [operating system (OS)](https://wiki-offline.jakearchibald.com/wiki/Operating_system) to access an arbitrary location in the program's memory space, allowing attackers to potentially steal data which is currently processed on the computer such as: 

- passwords  
- photos  
- email  
- instant messages  
- documents  

It was uncovered independently by two teams / parties alongside another vulnerability, [Meltdown](https://wiki-offline.jakearchibald.com/wiki/Meltdown_(security_vulnerability)), on January 3, 2018:
1. Jann Horn from [Google](https://wiki-offline.jakearchibald.com/wiki/Google)'s [Project Zero](https://googleprojectzero.blogspot.com/2018/01/reading-privileged-memory-with-side.html)
2. [Paul Kocher](https://wiki-offline.jakearchibald.com/wiki/Paul_Kocher) in collaboration with Daniel Genkin, Mike Hamburg, Moritz Lipp and Yuval Yarom.

It's existence, however, dates to June 1,2017 when the affected hardware vendors became aware of the issue.

There are currently two [Common Vulnerabilities and Exposures](https://wiki-offline.jakearchibald.com/wiki/Common_Vulnerabilities_and_Exposures) IDs related to Spectre, one for each variant of the issue. These are:
1. Branch target injection: [CVE-2017-5715](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5715)
2. Bounds check bypass: [CVE-2017-5753](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5753)

Information regarding the issue is logged as:
> Systems with microprocessors utilizing speculative execution and indirect branch prediction may allow unauthorized disclosure of information to an attacker with local user access via a side-channel analysis. 

### How Does It Work

According to the [Webkit](https://webkit.org/) team's [post](https://webkit.org/blog/8048/what-spectre-and-meltdown-mean-for-webkit/): 

> To initiate a Spectre- or Meltdown-based attack, the attacker must be able to run code on the victim’s processor. WebKit is affected because in order to render modern web sites, any web JavaScript engine must allow untrusted JavaScript code to run on the user’s processor. Spectre impacts WebKit directly. Meltdown impacts WebKit because WebKit’s security properties must first be bypassed (via Spectre) before WebKit can be used to mount a Meltdown attack.
  > - WebKit relies on branch instructions to enforce what untrusted JavaScript and [WebAssembly](https://wiki-offline.jakearchibald.com/wiki/WebAssembly) code can do. Spectre means that an attacker can control branches, so branches alone are no longer adequate for enforcing security properties.
  > - Meltdown means that userland code, such as JavaScript running in a web browser, can read kernel memory. Not all CPUs are affected by Meltdown and Meltdown is being mitigated by operating system changes. Mounting a Meltdown attack via JavaScript running in WebKit requires first bypassing branch-based security checks, like in the case of a Spectre attack. Therefore, Spectre mitigations that fix the branch problem also prevent an attacker from using WebKit as the starting point for Meltdown.

### Mitigating Spectre

WebKit’s response to Spectre is a two-tiered defense:

1. WebKit, as well as other browsers such as Firefox and Google Chrome, have disabled SharedArrayBuffer, since it can be used to create a high-resolution timer, and reduced timer precision from `performance.now` and other sources to 1ms.
2. WebKit is transitioning to using branchless security checking in addition to branch-based security checking. One of the ways they're implementing this is by using Index Masking.

Some of these changes shipped in the Jan 8 updates and more such changes will continue to land in WebKit soon enough. 

To summary, in order to keep your data safe you must update all compatible iOS devices.

The [CVE](http://cve.mitre.org/about/) IDs for all the issues mentioned in this blog post can be found in Apple's article: [About the security content of iOS 11.2.2](https://support.apple.com/en-us/HT208401).  

## Outro

If you enjoyed this blog post or found it helpful in any way, make sure to follow me on Twitter to find out when a new one is available.

Twitter: [@giovanni0918](https://twitter.com/giovanni0918)

Github: [giovanni0918](https://github.com/giovanni0918)

Website: [giovanni-orlando.com](https://giovanni-orlando.com)