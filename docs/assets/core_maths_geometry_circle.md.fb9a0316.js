import{_ as s,c as a,o as e,a as n}from"./app.a23aa8d0.js";const u=JSON.parse('{"title":"Circle","description":"","frontmatter":{},"headers":[{"level":2,"title":"Compatibility","slug":"compatibility","link":"#compatibility","children":[]},{"level":2,"title":"Constructors","slug":"constructors","link":"#constructors","children":[{"level":3,"title":"Circle(radius)","slug":"circle-radius","link":"#circle-radius","children":[]}]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"Area","slug":"area","link":"#area","children":[]},{"level":3,"title":"Perimeter","slug":"perimeter","link":"#perimeter","children":[]}]}],"relativePath":"core/maths/geometry/circle.md","lastUpdated":1665756380000}'),t={name:"core/maths/geometry/circle.md"},r=n(`<h1 id="circle" tabindex="-1">Circle <a class="header-anchor" href="#circle" aria-hidden="true">#</a></h1><p>This page is about the <code>Circle</code> class available in <a href="/core/maths/geometry.html"><code>PeyrSharp.Core.Maths.Geometry</code></a>. You can find here all of its constructors and properties.</p><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-hidden="true">#</a></h2><p>The <code>Circle</code> class is part of the <code>PeyrSharp.Core</code> module, which is compatible with all of these frameworks and platforms:</p><table><thead><tr><th>Package/Platform</th><th>Windows</th><th>macOS</th><th>Linux + others</th></tr></thead><tbody><tr><td>Core</td><td>\u2705</td><td>\u2705</td><td>\u2705</td></tr><tr><td><strong>Framework</strong></td><td><strong>.NET 5</strong></td><td><strong>.NET 6</strong></td><td><strong>.NET 7</strong></td></tr><tr><td>Core</td><td>\u2705</td><td>\u2705</td><td>\u2705</td></tr></tbody></table><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-hidden="true">#</a></h2><h3 id="circle-radius" tabindex="-1">Circle(radius) <a class="header-anchor" href="#circle-radius" aria-hidden="true">#</a></h3><h4 id="definition" tabindex="-1">Definition <a class="header-anchor" href="#definition" aria-hidden="true">#</a></h4><p>Initializes a <code>Circle</code> class from a specific radius.</p><h4 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-hidden="true">#</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>radius</code></td><td>The radius of the circle.</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If <code>radius</code> \u2264 0, a <code>DivideByZeroException</code> will be thrown.</p></div><h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Maths.Geometry</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Circle</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">circle</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Creates a circle with a radius of 10</span></span>
<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><h3 id="area" tabindex="-1">Area <a class="header-anchor" href="#area" aria-hidden="true">#</a></h3><h4 id="definition-1" tabindex="-1">Definition <a class="header-anchor" href="#definition-1" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> double Area </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> get</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>The <code>Area</code> property is a <code>double</code> which returns the area of the circle. You can only <code>get</code> this property.</p><h4 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Maths.Geometry</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Circle</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">circle</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">area</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> circle</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Area</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// area = 314.1592653589793</span></span>
<span class="line"></span></code></pre></div><h3 id="perimeter" tabindex="-1">Perimeter <a class="header-anchor" href="#perimeter" aria-hidden="true">#</a></h3><h4 id="definition-2" tabindex="-1">Definition <a class="header-anchor" href="#definition-2" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> double Perimeter </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> get</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>The <code>Perimeter</code> property is a <code>double</code> which returns the perimeter of the circle. You can only <code>get</code> this property.</p><h4 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Maths.Geometry</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Circle</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">circle</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">perimeter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> circle</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Perimeter</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// perimeter = 62.83185307179586</span></span>
<span class="line"></span></code></pre></div>`,27),l=[r];function o(c,p,i,d,h,y){return e(),a("div",null,l)}const D=s(t,[["render",o]]);export{u as __pageData,D as default};