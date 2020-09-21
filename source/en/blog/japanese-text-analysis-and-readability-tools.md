---
title: "Japanese Text Analysis and Readability Tools"
lang: en
date: 2018-07-27
cover: banner.jpg
categories:
	- en
tags:
- Japanese
- Featured
---

<img class="banner" alt="Art provided by Vecteezy" src="{% asset_path "banner.jpg" %}" />

Learning with content within your difficulty level can save you time, and allow you to actually learn rather than be frustrated with content that is too difficult. The measuring of difficulty is called readability, and the readability of Japanese texts can be determined by three methods: sentence features, kanji grade, and vocabulary lists. Let's look into these methods and how to use them, from academic to practical.

<!--more-->

<h2>Sentence Analysis</h2>

<img alt="NagoyaObi Project" src="{% asset_path "nagoyaobi.jpg" %}" />

The <a href="http://kotoba.nuee.nagoya-u.ac.jp/">NagoyaObi Project</a> and [jReadability](https://jreadability.net/en/) analyzes a text's sentence features by the ratio of kana and kanji use, punctuation and forms, number of sentences, and vocabulary. The importance of each feature is mathematically prioritized based on Japanese school graded texts in order to create a weighted difficulty score (<a href="https://web.archive.org/web/20110725134305/http://www.lrec-conf.org:80/proceedings/lrec2008/pdf/165_paper.pdf">NagaoyaObi abstract</a>). Texts matching a low elementary grade will probably have short sentences, not have much kanji, and have highly common words. These tools may be useful to determine the school grade of content, or to estimate one's comprehension ability.

<h2>Kanji Analysis</h2>

<img alt="Tokyo International University" src="{% asset_path "tokyointuni.jpg" %}" />

Kanji analysis tools grade texts by the order that kanji is taught in courses, books, and flashcard programs. This makes it possible to prioritize texts with only known kanji if learning by such resources. This includes Japan's national school cirriculum (Jouyou), the Japanese Language Proficiency Test (JLPT), and WaniKani (a flashcard website). However, it may be difficult to avoid native Japanese texts with kanji above one's current level. In order to be comfortable reading native texts, I recommend becoming familiar with the first 400 or 600 Joyou Kanji, which covers up until grades 3 and 4. Even Japanese children can understand a number of kanji above their school grade, even if beginner Japanese content has kana (furigana) spelling included alongside Kanji. Below are a number of kanji grading tools and their order system.

<div class="product-table">
	<table>
		<tr>
			<td>Website</td>
			<td>Jouyou</td>
			<td>JLPT</td>
			<td>WaniKani</td>
		</tr>
		<tr>
			<td><a href="https://joyokanji.info/">JoyoKanji</a>, <a href="https://web.archive.org/web/20200611102452/http://harapeco.grrr.jp/joyo-kanji-checker.html">Harapeco</a> & <a href="http://grader.at.brian.jp/">Brian</a></td>
			<td>✓</td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td><a href="https://web.archive.org/web/20190515183340/http://attosoft.info/tools/kanji-checker/">Attosoft</></td>
			<td>✓</td>
			<td>✓</td>
			<td></td>
		</tr>
		<tr>
			<td><a href="https://easypronunciation.com/en/japanese-word-frequency-counter">EasyPronunciation</a> & <a href="http://language.tiu.ac.jp/tools_e.html">Tokyo International University</a></td>
			<td></td>
			<td>✓</td>
			<td></td>
		</tr>
		<tr>
			<td><a href="https://greasyfork.org/en/scripts/722-kanji-highlighter">Kanji Highlighter Browser Script</a></td>
			<td></td>
			<td></td>
			<td>✓</td>
		</tr>
	</table>
</div>

<!--
For programmers, there's also the javascript libraries <a href="https://github.com/spect88/muzukashii">Muzukashii</a> and <a href="https://github.com/cantrellnm/kanji-levels">Kanji Levels</a>.
-->

<h2>Vocabulary Analysis (Recommended)</h2>
<!--<img alt="Tokyo International University" src="{% asset_path "vocabfreq.jpg" %}" />-->

<img src="{% asset_path "krause_text_difficulty_checker_banner.jpg" %}" />

<!--
<a href="https://jisho.org">Jisho.org</a>

Jisho also functions [as a dictionary](../dictionaries-and-goals-in-japanese), and rather than display an overview of kanji
Jisho also functions as a dictionary, and you can see my review of dictionaries here...

Vocabulary frequency lists show how relevant each word in a text is, by finding how often each word is used. Words may be compared to other texts, such as a corpus of a specific subject, to find how important each word is within that subject. This makes frequency lists useful to focus on memorizing only important words. However, this method is only as reliable as the chosen text or corpus, which may be outdated or not contain enough subject relevant data. One type of available frequency lists are those created from previous JLPT texts.
-->

Vocabulary analysis tools grade texts by a list of words, such as from those found in courses like the JLPT or a book, or from those you know - perhaps which are stored in a flashcard program like [Anki SRS](https://apps.ankiweb.net/). Texts could then be prioritized based on how many words you know or need to know (e.g. for a test), so as to not be overwhelmed from learning too many new words at once. This is more personal than sentence-feature analysis, and more reliable than kanji analysis. For those who wish to rely on native Japanese in the wild, it is definitely worth integrating this type of analysis into one's studies.

The <a href="http://language.tiu.ac.jp/tools_e.html">Tokyo International University</a> provides a tool to analyze the JLPT level of words in a text, and the somewhat archaic <a href="https://github.com/wareya/analyzer/releases">Wareya's analyzer</a> and <a href="https://sourceforge.net/projects/japanesetextana/">Brochtrup's Japanese Text Analysis</a> tools find the frequency of words in texts among other forms of analysis and features. Unfortunately from my testing, Brochtrup's tool seemed to produce inaccurate results despite using a known vocabulary list.

<!--
A modern and practical approach is the [Japanese Readifier](../../software) PC app and the <a href="https://www.krausekai.com/japanese-tools/known-word-checker/">Japanese Known Word Checker</a> website - two tools developed by me. Both allow import of a list of words, particularly those that you know, so as to grade texts by how many matched words are found. The Readifier app also acts as a J-E dictionary lookup tool, and finder of article texts that fits one's readability. On the other hand, the Checker website allows lookup of words via a third-party dictionary website.
-->

However, there are more modern and practical tools. The [Japanese Readifier](../../software) PC app, [Japanese.io](https://www.japanese.io/) and <a href="https://www.krausekai.com/japanese-tools/known-word-checker/">Japanese Known Word Checker</a> websites, and [Manabi](https://reader.manabi.io/) and [Mondo](https://www.polyglots.net/app/other/) phone apps all allow you to import or create a list of words - particularly those that you know - and grade texts by how many listed words are found in a text. These apps and websites may also find articles or texts that fit your readability level, and act as dictionary lookup tools.

<h2>Further Research</h2>

If the concept of learning within your level interests you, look further into [Input Hypothesis](https://en.wikipedia.org/wiki/Input_hypothesis).

And, if you're looking for a Japanese dictionary, how to study with one, or efficient goal making, then [see here](../dictionaries-and-goals-in-japanese).


<!--<h3>Text Analysis Tool</h3>-->

<!--<img alt="Christopher Brochtrup's Analysis Tool" src="{% asset_path "cb4960_text_analysis.jpg" %}" />-->

<!--
For those who are willing to pay, there are books which are graded by Japanese school grade or JLPT level. Words which are typically written in kanji beyond the grade of the book will either be written in kana, or have kana accompanying the higher level kanji (aka furigana).


unrelated but worth a mention later maybe:
	jglossator, Graded Reader Apps, SatoriReader, EtoEto, readnihon, graded reader books
-->
