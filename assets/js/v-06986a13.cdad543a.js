"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[324],{3596:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-06986a13",path:"/guide/services/file_extractor.html",title:"File extractor service",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"guide/services/file_extractor.md",git:{updatedTime:1634291321e3,contributors:[{name:"Anton",email:"a.shumansky@gmail.com",commits:1}]}}},5194:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="file-extractor-service" tabindex="-1"><a class="header-anchor" href="#file-extractor-service" aria-hidden="true">#</a> File extractor service</h1><p>File extractor provides you a simple function to search in a path recursively and find terms based on a regular expression.</p><p>Register the service into your <code>main.go</code> file:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>registry<span class="token punctuation">.</span><span class="token function">ServiceProviderExtractor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Access the service:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>service<span class="token punctuation">.</span><span class="token function">DI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">FileExtractorService</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Extract phrase (errors in this example):</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>errorTerms<span class="token punctuation">,</span> err <span class="token operator">:=</span> extractService<span class="token punctuation">.</span><span class="token function">Extract</span><span class="token punctuation">(</span>fileextractor<span class="token punctuation">.</span>ExtractParams<span class="token punctuation">{</span>\n  SearchPath<span class="token punctuation">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>\n  Excludes<span class="token punctuation">:</span>   <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  Expression<span class="token punctuation">:</span> <span class="token string">`errors.New[(]*\\(&quot;([^)]*)&quot;\\)`</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>\n  <span class="token comment">// handle error</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>',8),t={},p=(0,a(3744).Z)(t,[["render",function(n,s){return e}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,e]of s)n[a]=e;return n}}}]);