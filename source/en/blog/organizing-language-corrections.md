---
title: Organizing Language Corrections
old-title: Organizing Japanese Corrections
lang: en
date: 2016-05-22
cover: banner.jpg
categories:
	- en
tags:
- Japanese
---

<img class="banner" alt="Art provided by Vecteezy" src="{% asset_path "banner.jpg" %}" />

When studying with a Japanese partner online, corrections may be received in different formats. It may be difficult to distinguish corrections and mistakes, or to format the corrections to be easy to read. Here are a few issues I have encountered, and ways to fix them.

<!--more-->

<h3>Formatting Corrections</h3>

Often when copying corrections from Skype, Line, etc - the person's name/handle or time-stamp will also be copied. Removing these message prefixes for a couple of messages is rather trivial, however, for many messages this is bothersome. I recommend using a word or text editor that supports find-replace, or multi-line editing. I use <a href="https://notepad-plus-plus.org/">Notepad++</a>, which supports both of these features. Shown in the below screenshot, multiple lines can be selected at once by holding the alt key and left clicking the mouse, to create a selection that can be edited. This makes it easy to then backspace this portion of text. Remember to set Notepad++ to UTF-8 for it to correctly render Japanese text (this can be enabled by default in the options).

<img src="{% asset_path "notepad_alt_click.jpg" %}" />

<h3>Comparing Corrections</h3>

Although I had also tried several online and offline comparison tools, none of them offered the level of accuracy or reliability that <a href="https://neil.fraser.name/software/diff_match_patch/demos/diff.html">Neil Fraser's Diff</a> online tool provides for Japanese. This tool makes it possible to view a side-by-side comparison (with an improved GUI with <a href="https://greasyfork.org/en/scripts/19875-neil-fraser-diff-demo-enhanced-output-view">my script here</a>) of the original and corrected text, with a character-by-character highlight (especially with the 'no cleanup' option selected) which shows what has changed between both versions. This is particularly helpful when only minor corrections have been made. Comparisons made are purely client-side, meaning your text isn't sent online to be seen by anyone else and remains private to you.

<img src="{% asset_path "neilfraserdiff.jpg" %}" />

When copying and pasting the compared text into a Word Document, the highlighting should also remain intact (improved with my GUI script above), which makes it easier to review.

<h3>Viewing Lang-8 Corrections</h3>

Lang-8 is a platform for language exchange, where it is possible to post texts in a language one is learning and receive corrections. Corrections may come from multiple people, and it can be difficult to view and organize them due to Lang-8's website design.

Firstly, when clicking the "View All Corrections" button at the top of the page, the corrections are poorly displayed, and may even include non-corrections (a 'correction' which is the same as your original writing!), making it difficult to start compiling corrections at all.

Secondly, those who correct often use the strike-through formatting option. For Japanese learners, this can make it impossible to quickly lookup new vocabulary (such as with browser plugins rikaichan and rikaisan). Even when copying a correction to anywhere else (eg: Word, Notepad), the incorrect strike-throughed portion of text will also be copied, rendering the correction useless.

In order to fix the "View All Corrections" view, and to fix the strike-through issue, <a href="https://greasyfork.org/en/scripts/11160-lang-8-all-corrections-view-enhancer">I have written a script here</a>. Although the below screenshot doesn't give this script much justice, please feel free to read the script's features and try it out!

<img src="{% asset_path "lang8viewen.jpg" %}" />

<!--

<h3>Use a Dictionary App</h3>

- Saves to CSV
- Can be imported to Anki, etc

-->
