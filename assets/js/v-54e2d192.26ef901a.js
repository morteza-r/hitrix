"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[255],{1872:(n,e,a)=>{a.r(e),a.d(e,{data:()=>s});const s={key:"v-54e2d192",path:"/guide/services/config.html",title:"Config",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Environment variables in config file",slug:"environment-variables-in-config-file",children:[]}],filePathRelative:"guide/services/config.md",git:{updatedTime:1634291321e3,contributors:[{name:"Anton",email:"a.shumansky@gmail.com",commits:1}]}}},5400:(n,e,a)=>{a.r(e),a.d(e,{default:()=>t});const s=(0,a(6252).uE)('<h1 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> Config</h1><p>This service provides you access to your config file. We support only YAML file.</p><p>Register the service into your <code>main.go</code> file:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code> registry<span class="token punctuation">.</span><span class="token function">ServiceProviderConfigDirectory</span><span class="token punctuation">(</span><span class="token string">&quot;../config&quot;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>you should provide the folder where are your config files.</p><p>The folder structure should look like that:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>config\n - app-name\n    - config.yaml\n - hitrix.yaml #optional config where you can define some settings related to built-in services like slack service\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Access the service:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>service<span class="token punctuation">.</span><span class="token function">DI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Config</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="environment-variables-in-config-file" tabindex="-1"><a class="header-anchor" href="#environment-variables-in-config-file" aria-hidden="true">#</a> Environment variables in config file</h2><p>Its good practice to keep your secrets like database credentials and so on out of the repository. Our advice is to keep them like environment variables and call them into config.yaml file For example your config can looks like this:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">orm</span><span class="token punctuation">:</span>\n  <span class="token key atrule">default</span><span class="token punctuation">:</span>\n    <span class="token key atrule">mysql</span><span class="token punctuation">:</span> ENV<span class="token punctuation">[</span>DEFAULT_MYSQL<span class="token punctuation">]</span>\n    <span class="token key atrule">redis</span><span class="token punctuation">:</span> ENV<span class="token punctuation">[</span>DEFAULT_REDIS<span class="token punctuation">]</span>\n    <span class="token key atrule">locker</span><span class="token punctuation">:</span> default\n    <span class="token key atrule">local_cache</span><span class="token punctuation">:</span> <span class="token number">1000</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>where <code>DEFAULT_MYSQL</code> and <code>DEFAULT_REDIS</code> are env variables and our framework will automatically replace <code>ENV[DEFAULT_MYSQL]</code> and <code>ENV[DEFAULT_REDIS]</code> with the right values</p><p>If you want to define array of values you should split them by <code>;</code> and they will be presented into the yaml file in that way:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">cors</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> test1\n    <span class="token punctuation">-</span> test2\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>If you want to enable the debug for orm you can add this tag <code>orm_debug: true</code> on the main level of your config</p><p>Also we check if there is .env.XXX file in main config folder where XXX is the value of the APP_MODE. If there is for example .env.local we are reading those env variables and merge them with config.yaml how we presented above</p>',17),o={},t=(0,a(3744).Z)(o,[["render",function(n,e){return s}]])},3744:(n,e)=>{e.Z=(n,e)=>{for(const[a,s]of e)n[a]=s;return n}}}]);