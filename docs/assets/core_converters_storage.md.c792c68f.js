import{_ as e,c as a,o as t,a as s}from"./app.8a9064b9.js";const g=JSON.parse('{"title":"Storage","description":"","frontmatter":{},"headers":[{"level":2,"title":"Compatibility","slug":"compatibility","link":"#compatibility","children":[]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"ToByte(value, storageUnit)","slug":"tobyte-value-storageunit","link":"#tobyte-value-storageunit","children":[]},{"level":3,"title":"ToKilobyte(value, storageUnit)","slug":"tokilobyte-value-storageunit","link":"#tokilobyte-value-storageunit","children":[]},{"level":3,"title":"ToMegabyte(value, storageUnit)","slug":"tomegabyte-value-storageunit","link":"#tomegabyte-value-storageunit","children":[]},{"level":3,"title":"ToGigabyte(value, storageUnit)","slug":"togigabyte-value-storageunit","link":"#togigabyte-value-storageunit","children":[]},{"level":3,"title":"ToTerabyte(value, storageUnit)","slug":"toterabyte-value-storageunit","link":"#toterabyte-value-storageunit","children":[]},{"level":3,"title":"ToPetabyte(value, storageUnit)","slug":"topetabyte-value-storageunit","link":"#topetabyte-value-storageunit","children":[]}]}],"relativePath":"core/converters/storage.md","lastUpdated":1666627208000}'),n={name:"core/converters/storage.md"},o=s(`<h1 id="storage" tabindex="-1">Storage <a class="header-anchor" href="#storage" aria-hidden="true">#</a></h1><p>This page is about the <code>Storage</code> class available in <a href="/core/converters.html"><code>PeyrSharp.Core.Converters</code></a>. You can find here all of its methods.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This class is <code>static</code>.</p></div><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-hidden="true">#</a></h2><p>The <code>Storage</code> class is part of the <code>PeyrSharp.Core</code> module, which is compatible with all of these frameworks and platforms:</p><table><thead><tr><th>Package/Platform</th><th>Windows</th><th>macOS</th><th>Linux + others</th></tr></thead><tbody><tr><td>Core</td><td>\u2705</td><td>\u2705</td><td>\u2705</td></tr><tr><td><strong>Framework</strong></td><td><strong>.NET 5</strong></td><td><strong>.NET 6</strong></td><td><strong>.NET 7</strong></td></tr><tr><td>Core</td><td>\u2705</td><td>\u2705</td><td>\u2705</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="tobyte-value-storageunit" tabindex="-1">ToByte(value, storageUnit) <a class="header-anchor" href="#tobyte-value-storageunit" aria-hidden="true">#</a></h3><h4 id="definition" tabindex="-1">Definition <a class="header-anchor" href="#definition" aria-hidden="true">#</a></h4><p>Converts a size (kb, mb, ...) to byte. Returns a <code>double</code> value.</p><h4 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-hidden="true">#</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>value</code></td><td>The value to convert.</td></tr><tr><td><code>TimeUnits</code></td><td><code>storageUnit</code></td><td>The unit of the value. (ex: kilobyte, gigabyte...)</td></tr></tbody></table><h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Converters</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">double</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">byte</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Storage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ToByte</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> StorageUnits</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Kilobyte</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;">// byte = 1000</span></span>
<span class="line"></span></code></pre></div><h3 id="tokilobyte-value-storageunit" tabindex="-1">ToKilobyte(value, storageUnit) <a class="header-anchor" href="#tokilobyte-value-storageunit" aria-hidden="true">#</a></h3><h4 id="definition-1" tabindex="-1">Definition <a class="header-anchor" href="#definition-1" aria-hidden="true">#</a></h4><p>Converts a size (kb, mb, ...) to kilobyte. Returns a <code>double</code> value.</p><h4 id="arguments-1" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-1" aria-hidden="true">#</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>value</code></td><td>The value to convert.</td></tr><tr><td><code>TimeUnits</code></td><td><code>storageUnit</code></td><td>The unit of the value. (ex: byte, gigabyte...)</td></tr></tbody></table><h4 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Converters</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">double</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">kilobyte</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Storage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ToKilobyte</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> StorageUnits</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Byte</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;">// kilobyte = 2</span></span>
<span class="line"></span></code></pre></div><h3 id="tomegabyte-value-storageunit" tabindex="-1">ToMegabyte(value, storageUnit) <a class="header-anchor" href="#tomegabyte-value-storageunit" aria-hidden="true">#</a></h3><h4 id="definition-2" tabindex="-1">Definition <a class="header-anchor" href="#definition-2" aria-hidden="true">#</a></h4><p>Converts a size (kb, mb, ...) to megabyte. Returns a <code>double</code> value.</p><h4 id="arguments-2" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-2" aria-hidden="true">#</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>value</code></td><td>The value to convert.</td></tr><tr><td><code>TimeUnits</code></td><td><code>storageUnit</code></td><td>The unit of the value. (ex: kilobyte, gigabyte...)</td></tr></tbody></table><h4 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Converters</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">double</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">megabyte</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Storage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ToMegabyte</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1500</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> StorageUnits</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Kilobyte</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;">// megabyte = 1.5</span></span>
<span class="line"></span></code></pre></div><h3 id="togigabyte-value-storageunit" tabindex="-1">ToGigabyte(value, storageUnit) <a class="header-anchor" href="#togigabyte-value-storageunit" aria-hidden="true">#</a></h3><h4 id="definition-3" tabindex="-1">Definition <a class="header-anchor" href="#definition-3" aria-hidden="true">#</a></h4><p>Converts a size (kb, mb, ...) to gigabyte. Returns a <code>double</code> value.</p><h4 id="arguments-3" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-3" aria-hidden="true">#</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>value</code></td><td>The value to convert.</td></tr><tr><td><code>TimeUnits</code></td><td><code>storageUnit</code></td><td>The unit of the value. (ex: kilobyte, megabyte...)</td></tr></tbody></table><h4 id="usage-3" tabindex="-1">Usage <a class="header-anchor" href="#usage-3" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Converters</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">double</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">gigabyte</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Storage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ToGigabyte</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> StorageUnits</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Megabyte</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;">// gigabyte = 1</span></span>
<span class="line"></span></code></pre></div><h3 id="toterabyte-value-storageunit" tabindex="-1">ToTerabyte(value, storageUnit) <a class="header-anchor" href="#toterabyte-value-storageunit" aria-hidden="true">#</a></h3><h4 id="definition-4" tabindex="-1">Definition <a class="header-anchor" href="#definition-4" aria-hidden="true">#</a></h4><p>Converts a size (kb, mb, ...) to terabyte. Returns a <code>double</code> value.</p><h4 id="arguments-4" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-4" aria-hidden="true">#</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>value</code></td><td>The value to convert.</td></tr><tr><td><code>TimeUnits</code></td><td><code>storageUnit</code></td><td>The unit of the value. (ex: kilobyte, gigabyte...)</td></tr></tbody></table><h4 id="usage-4" tabindex="-1">Usage <a class="header-anchor" href="#usage-4" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Converters</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">double</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">terabyte</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Storage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ToTerabyte</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> StorageUnits</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Petabyte</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;">// terabyte = 1000</span></span>
<span class="line"></span></code></pre></div><h3 id="topetabyte-value-storageunit" tabindex="-1">ToPetabyte(value, storageUnit) <a class="header-anchor" href="#topetabyte-value-storageunit" aria-hidden="true">#</a></h3><h4 id="definition-5" tabindex="-1">Definition <a class="header-anchor" href="#definition-5" aria-hidden="true">#</a></h4><p>Converts a size (kb, mb, ...) to petabyte. Returns a <code>double</code> value.</p><h4 id="arguments-5" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-5" aria-hidden="true">#</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>value</code></td><td>The value to convert.</td></tr><tr><td><code>TimeUnits</code></td><td><code>storageUnit</code></td><td>The unit of the value. (ex: kilobyte, gigabyte...)</td></tr></tbody></table><h4 id="usage-5" tabindex="-1">Usage <a class="header-anchor" href="#usage-5" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Converters</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">double</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">petabyte</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Storage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ToPetabyte</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> StorageUnits</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Terabyte</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;">// petabyte = 1</span></span>
<span class="line"></span></code></pre></div>`,49),l=[o];function r(d,i,p,c,h,y){return t(),a("div",null,l)}const b=e(n,[["render",r]]);export{g as __pageData,b as default};
