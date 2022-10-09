import{_ as a,c as e,o as n,a as s}from"./app.e78365ed.js";const D=JSON.parse('{"title":"Exceptions","description":"","frontmatter":{},"headers":[{"level":2,"title":"Compatibility","slug":"compatibility","link":"#compatibility","children":[]},{"level":2,"title":"Converters","slug":"converters","link":"#converters","children":[{"level":3,"title":"RGBInvalidValueException","slug":"rgbinvalidvalueexception","link":"#rgbinvalidvalueexception","children":[]},{"level":3,"title":"HEXInvalidValueException","slug":"hexinvalidvalueexception","link":"#hexinvalidvalueexception","children":[]}]},{"level":2,"title":"Guid","slug":"guid","link":"#guid","children":[{"level":3,"title":"InvalidGuidLengthException","slug":"invalidguidlengthexception","link":"#invalidguidlengthexception","children":[]}]}],"relativePath":"exceptions.md","lastUpdated":1665311928000}'),l={name:"exceptions.md"},t=s(`<h1 id="exceptions" tabindex="-1">Exceptions <a class="header-anchor" href="#exceptions" aria-hidden="true">#</a></h1><p>This page is about the exceptions available in PeyrSharp.Exceptions. They are grouped by category.</p><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-hidden="true">#</a></h2><p>Exceptions are part of the <code>PeyrSharp.Exceptions</code> module, which is compatible with all of these frameworks and platforms:</p><table><thead><tr><th>Package/Platform</th><th>Windows</th><th>macOS</th><th>Linux + others</th></tr></thead><tbody><tr><td>Exceptions</td><td>\u2705</td><td>\u2705</td><td>\u2705</td></tr><tr><td><strong>Framework</strong></td><td><strong>.NET 5</strong></td><td><strong>.NET 6</strong></td><td><strong>.NET 7</strong></td></tr><tr><td>Exceptions</td><td>\u2705</td><td>\u2705</td><td>\u2705</td></tr></tbody></table><h2 id="converters" tabindex="-1">Converters <a class="header-anchor" href="#converters" aria-hidden="true">#</a></h2><h3 id="rgbinvalidvalueexception" tabindex="-1">RGBInvalidValueException <a class="header-anchor" href="#rgbinvalidvalueexception" aria-hidden="true">#</a></h3><h4 id="definition" tabindex="-1">Definition <a class="header-anchor" href="#definition" aria-hidden="true">#</a></h4><p>The <code>RGBInvalidValueException</code> is an exception used in the <code>Converters</code> class when you provide an invalid value for a RGB color.</p><h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h4><div class="language-c#"><button class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Exceptions</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">throw</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">RGBInvalidValueException</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Please provide correct RGB values.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><h3 id="hexinvalidvalueexception" tabindex="-1">HEXInvalidValueException <a class="header-anchor" href="#hexinvalidvalueexception" aria-hidden="true">#</a></h3><h4 id="definition-1" tabindex="-1">Definition <a class="header-anchor" href="#definition-1" aria-hidden="true">#</a></h4><p>The <code>HEXInvalidValueException</code> is an exception used in the <code>Converters</code> class when you provide an invalid value for a HEX color.</p><h4 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-hidden="true">#</a></h4><div class="language-c#"><button class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Exceptions</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">throw</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HEXInvalidValueException</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Please provide a correct HEX value.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><h2 id="guid" tabindex="-1">Guid <a class="header-anchor" href="#guid" aria-hidden="true">#</a></h2><h3 id="invalidguidlengthexception" tabindex="-1">InvalidGuidLengthException <a class="header-anchor" href="#invalidguidlengthexception" aria-hidden="true">#</a></h3><h4 id="definition-2" tabindex="-1">Definition <a class="header-anchor" href="#definition-2" aria-hidden="true">#</a></h4><p>The <code>InvalidGuidLengthException</code> is an exception used in the <code>Guid</code> class when you provide an invalid value for the length of the Guid. You should provide a length between 1-32.</p><h4 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-hidden="true">#</a></h4><div class="language-c#"><button class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Exceptions</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Guid length</span></span>
<span class="line"><span style="color:#89DDFF;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">length</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">45</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Will throw an error</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">length </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> length </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">32</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">throw</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">InvalidGuidLengthException</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">The length of a Guid must be between 1 and 32.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,22),o=[t];function i(p,r,c,d,h,u){return n(),e("div",null,o)}const F=a(l,[["render",i]]);export{D as __pageData,F as default};
