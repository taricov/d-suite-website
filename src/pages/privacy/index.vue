<script lang="ts" setup>
</script>

<template>
  <main class="flex flex-col gap-y-10">
    <h1 id="sample-markdown">Sample Markdown</h1>
<h1 id="extension-privacy-policy">Extension Privacy Policy</h1>
<h2 id="intro">Intro</h2>
<p>Different extensions use personal data in different ways. This privacy policy encompasses general principles of how extensions I create collect and handle personal data. Individual extensions, when you first use them, will display their own unique privacy policies and ask you to agree to them before continued use.</p>
<h2 id="data-collection">Data Collection</h2>
<p>None of the extensions I write collect any data at all. Since no data is collected, it stands to reason, and is, indeed, the case, that none of your data can be sold to third parties.</p>
<p>That being said, there are a few other ways your data is used.</p>
<h2 id="chrome-storage-api">Chrome Storage API</h2>
<p>Several of my extensions take advantage of <a href="https://developers.chrome.com/extensions/storage">Google Chrome&#39;s Storage API</a> to locally store minimal state information. This is similar to a <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies">cookie</a>. Examples of data stored this way might include your initials for the <a href="https://chrome.google.com/webstore/detail/b-roll-credit-copier/gnndiaoenmcmkcghlgkdnkdilnhoheog?hl=en-US">B-Roll Credit Copier</a> or information about if and when you agreed to the privacy policy. Google syncs this information across your various computers and Chrome installations. However, my extensions only access this data locally on your machine and they do not transmit it. </p>
<h2 id="third-party-apis">Third-Party APIs</h2>
<p>Some of my extensions access third party APIs and report back the results. For example, when you use the <a href="https://chrome.google.com/webstore/detail/b-roll-credit-copier/gnndiaoenmcmkcghlgkdnkdilnhoheog?hl=en-US">B-Roll Credit Copier</a> on YouTube, it sends the ID of the YouTube video to <a href="https://developers.google.com/youtube/v3/docs/videos">Google’s YouTube API</a>, receives information back about that video, and then incorporates that information into the data it writes to the clipboard. Generally, when my extensions use these third Party API services, they will send some non-personal information about the page you are visiting. However, when extensions access a third party API, there is some personal information that third party receives in the <a href="https://developer.mozilla.org/en-US/docs/Glossary/Request_header">request header</a>, most notably your <a href="https://computer.howstuffworks.com/internet/basics/what-is-an-ip-address.htm">IP address</a> and <a href="https://developer.chrome.com/multidevice/user-agent">user agent string</a>. Some companies will use information like that to develop a “<a href="https://pixelprivacy.com/resources/browser-fingerprinting/">browser fingerprint</a>&quot; that can probably track and personally identify you. Unfortunately, this is not something that I or my extensions have control over. If this is a concern for you, consider using a VPN to mask your IP address.</p>
<h2 id="changes-to-the-privacy-policy">Changes to the Privacy Policy</h2>
<p>If there are substantive<sup>1</sup> changes made to this blanket privacy policy or to the individual privacy policies of any of my extensions, I will push out a new version of the affected extension(s) and ask you to agree to the amended privacy policy.</p>
<h2 id="feedback">Feedback</h2>
<p>If you have questions or concerns about this privacy policy, feel free to <a href="mailto:david.heidelberger@gmail.com">send me an email</a> or <a href="https://github.com/dheidelberger/extension-privacy-policy/issues/new">file an issue</a> to this repository.</p>
<hr>
<h4 id="notes-">Notes:</h4>
<p>1 - When I say &quot;substantive,&quot; I mean that I won&#39;t push out app updates for minor changes like fixing a typo.</p>

  </main>
</template>
<style>
.tc{
@apply bg-gradient-to-bl from-amber-200 to-lime-600
}
.bc{
@apply bg-lime-500/60 hover:bg-lime-500/80
}
</style>