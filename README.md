## We Don't Know JS

####  JavaScript ও Web Development  এর Eco System   গভিরভাবে জানার  জন্য ও  ইন্টারভিউ জিজ্ঞাসা করার মত গুরুত্বপূর্ণ  সব প্রশ্ন ও উত্তর সমূহ একত্রে  । আশা করি প্রতিটি Developer   উপকৃত হবেন । 


<h5 >
এই রিপোটি  <a href="https://learnwithsumit.com/">Learn With Sumit </a>,
  <a href="https://www.youtube.com/@anisul-islam">Anisul Islam  </a>, 
  <a href="https://www.youtube.com/@StackLearner">Stack Learner </a> সব অন্য সকল বাংলাদেশী কন্টেন্ট ক্রিয়েটর ও লেখকদের উৎসর্গ  করা হল ।
</h5>



<br>

##### নির্দেশনা

 - কোনো  সাজেসন্স,রিকুয়েস্ট থাকলেঃ <a href="https://github.com/yeasin-2002/We-Do-not-Know-JS/issues">  Issue </a>  ক্রিয়েট করুন 

 - কোনো  প্রশ্ন না বুঝলে বা বিস্তারিত জানতে চাইলেঃ    <a href="https://github.com/yeasin-2002/We-Do-not-Know-JS/discussions"> Discussion </a> এ জিজ্ঞাসা করুন  । 

 -  Contribute  করতে চান চাইলেঃ  <a href="https://github.com/yeasin-2002/We-Do-not-Know-JS/blob/main/CONTRIBUTING.md"> Contributions Guideline </a> পড়ুন । 




<br>

### সূচিপত্র

- [JavaScript](#js)
- [React.js](#reactjs)
- [Next.js](#nextjs)
- [Node/Express](#node-express)
- [Database](#database)

<br>

<hr>

<h3 align="center" id="js"><img src="https://skillicons.dev/icons?i=js" width="20" />  JavaScript</h3>

<div> 



<details>
<summary> ১.  Local storage ও  session   এর মধ্যে পার্থক্য কি ?  </summary>
  
  ####  local storage ও session  এর মধ্যে  পার্থক্য হলোঃ 

| পার্থক্য | Local Storage | Session Storage  |
| --- | --- | --- |
| স্থায়ীত্ব |   মা্যানুয়ালি বা প্রোগ্রামিক্যালি  ব্রাউজার ডাটা  ক্লিয়ার  না করা পর্যন্ত  | ট্যাব ক্লোস করার সাথে সাথে |
|  এভাইলেবল  | সকল window তেই  | নির্দিষ্ট  ট্যাবেই  |
| উপযোগী  |  দীর্ঘ সময় ডাটা  রাখায় | আল্প  সময় ডাটা  রাখায় |
</details>

<details>
<summary> ২. DOM ও BOM এর মধ্যে পার্থক্য কি ?  </summary>

#### BOM ও  DOM ব্রাউজারের JavaScript  এর Window Object এর  উপাদান । ব্রাউজারে সকল  কিছু window নামের একটা master object এর থেকে একসেস করা যায় 

BOM ও DOM এর মধ্যে পার্থক্য হলোঃ 

| বিষয় | DOM | BOM |
| --- | --- | --- |
| পূর্ননাম | Document Object Model | Browser Object Model |
| ব্যখ্যা | HTML ও  XML documents যার মাধ্যমে হোস্ট এনভাইরমেন্ট  এর স্ট্রাকচার   | ব্রাউজার স্পেসিফিক ফাংশনালিটি |
| উপাদান  | Elements, Attributes, Text, etc. |  Window, Screen, Location, History, Navigator, etc. |
| নিয়ন্ত্রনকারী  | W3C | প্রতিটি ব্রাউজারে ভিন্ন ভিন্নভাবে ইম্প্লিমেন্ট করে  |
</details>

<details>
<summary>৩.  Pure Function কাকে বলে ?     </summary>

#### Computer Science  এর ভাষায় যে সকল  function  ইন্টার্নাল  লজিক নিয়ে থাকে ও  একই Input এর জন্য একই Output দিয়ে থাকে তাকে Pure Function   বলে । 

এর ২টা বৈশিষ্ট থাকে 

- নিজের বিজনেস লজিক নিয়ে কনসার্ন  ।
- Same Input এর জন্য Same output  দিয়ে থাকে ।
</details>

<details>
<summary>৪.  Falsy  ভ্যালু কোনগুলেকে বলে?  </summary>

####  0, "", null, undefined, NaN, false এগুলোকে falsy ভালু বলে ।
</details>

<details>
<summary>৫.  falsy ও  nullish ভ্যালু এর মধ্যে পার্থক্য কি ?  </summary>

#### Falsy value বলতে 0, "", null, undefined, NaN, false কে বুঝায়   এবং nullish value বলতে null, undefined কে বুঝায় ।
nullish value মুলত falsy value এর সাবসেট । 

##### ওপারেটর 
-  falsy value  এর জন্য  || দিয়ে চেক করা যায় 
- nullish value  ডিটেক্ট করতে ?? ব্যবহার করা হয় 



</details>

 
 <details>
 <summary>৬.   Shallow Copy ও Deep Copy বলতে কি বুঝায়?   </summary>

 ####  কোনো Object বা Array ১ লেভেল ডিপ কপি করতে গেলে তাকে Shallow Copy বলে । আর ২ লেভেল বা ততোধিক  ডিপ কপি করতে গেলে তাকে Deep Copy বলে ।

#### উদাহরণঃ
  <img src="./assets/shallowCopyVsDeepCopy.png" width="500px" >

  এখানে, 
   shallowCopy.lang যদি  পরিবর্তন করা হয় তবে arr  অর্থাত মূল array এর ভ্যালু পরিবর্তন হয় । কারণ এখানে  shallowCopy  এর মান মূল array এর রেফারেন্স নেয় ।
  কিন্তু, 
  deepCopy.lang যদি  পরিবর্তন করা হয় তবে arr  অর্থাত মূল array এর ভ্যালু পরিবর্তন হয় না । কারণ এখানে  deepCopy  এর মান মূল array এর ক্লোন নেয় ।

  যেহেতু arr.lang  ও একটি Array তাই এটিও রেফারেন্স টাইপের তাই সেটিও ডিপলি করে পরিবর্তন করতে হয় 


 </details>

<details>
<summary>৭.  Deep Copy   এর ক্ষেত্রে JSON.stringify ও পরে আবার JSON.parse করে  করলে এই  পদ্ধতি কি ব্যবহার করা  উচিত?    </summary>
<img src="./assets/json_strinify_persepng.png" width="500px" >
</details>


 <details>
 <summary>৮.  Event Propagation কাকে বলে?  </summary>
 Ans:
 </details>

  <details>
  <summary>৯.  Event Bubbling  বনাম Event Delegations এর মধ্যে  পার্থক্য কি?  </summary>
  Ans:
  </details>

  <details>
  <summary>১০.  Single Responsible principal কাকে বলে?  </summary>
  Ans:
  </details>

  <details>
  <summary>১১.  primitive ও   non-primitive data types  এর  মধ্যে  পার্থক্য কি? উভয়ের একটী করে উদাহরণ দেও
   </summary> 
  

  <img src="./assets/json_strinify_persepng.png" width="500px" >
  </details>

  <details>
<summary> ১২. JavaScript এ   null and Undefined এর মধ্যে পার্থক্য কি ?   </summary>
Ans:
</details>



</div>

<h3 align="center" id="reactjs"><img src="https://skillicons.dev/icons?i=react" width="20" />  React.js</h3>

<div> 
 <details>
 <summary> ১.  React ও React-DOM কী? Website বানাতে ২টি আলাদা আলাদা ইন্সটল কেন করতে  হয়?  </summary>
 Ans:
 </details>

 <details>
 <summary>২.  “React is Reactive ” এইটি দ্বারা React কি  বুঝাতে চাচ্ছে? </summary>
 Ans:
 </details>

 <details>
 <summary>৩.  HTML,CSS  এর রেন্ডারিং প্রোসেস কি কি?  </summary>
 Ans:
 </details>
 
 <details>
 <summary>৪.  React State Update এর ক্ষেত্রে Batch Update বলতে কি বুঝায় ? </summary>
 Ans:
 </details>

 <details>
 <summary>৫.  একাধিক DOM Operations এর ক্ষেত্রে Browser DOM  কি আসলেই Slow?   এক্ষেত্রে React  কিভাবে DOM Operations Optimize করতে পারে ।  </summary>
 Ans:
 </details>

 <details>
 <summary>৬.  ডিফিং বা  রি- কনসালেসশন এলগোরিদম কাকে বলে? এবং React-DOM এটিকে কোন ক্ষেত্রে ব্যবহার  করে ? </summary>
 Ans:
 </details>

 <details>
 <summary>৭.  React Component এর নাম Capital Letter দিয়া শুরু কেন করতে হয় ?  </summary>
 Ans:
 </details>

 <details>
 <summary> ৮.  “Props are Immutable” এর মানে কি ?  </summary>
 Ans:
 </details>

 <details>
 <summary>৯.  JSX Components  কে কেন কোনো প্যারেন্ট কম্পোনেন্ট বা Fragment দিয়ে Wrap করতে হয় ?  </summary>
 Ans:
 </details>

 <details>
 <summary>১০.  React এ List রেন্ডার করতে হলে Array.prototype.map ব্যবহার করা হয়। map ব্যাতিত forEach,for loop,while loop এর মাধ্যমেও কি  List রেন্ডার করা যায় ? হ্যা হলে কিভাবে?  </summary>
 Ans:
 </details>

 <details>
 <summary> ১১.  List রেন্ডার এর ক্ষেত্রে প্রতিটি element কে কেন আলাদা আলাদা key দিতে হয় ? যদি key না দেয়া হয় তাহলে default ভাবে কি কী হিসেবে  নেয়?  </summary>
 Ans:
 </details>

 <details>
 <summary>১২.  React Component কিভাবে Pure Component হিসেবে কাজ  করে ?  </summary>
 Ans:
 </details>

 <details>
 <summary> ১৩.  React Dev Mood এ  State পরিবর্তন  এর সাথে সাথে ২ ভার রি-রেন্ডার করে কেন ? </summary>
 Ans:
 </details>

 <details>
 <summary> ১৪.  Local ও Global Component Mutation বলতে কি বুঝায় ? </summary>
 Ans:
 </details>

 <details>
 <summary>১৫.  Components Hydration বলতে কি বুঝায় ?  </summary>
 Ans:
 </details>

 <details>
 <summary> ১৬.  React Side Effect কি? Side Effect হ্যান্ডেল করার মাধ্যম কি কি হতে পারে?  </summary>
 Ans:
 </details>
</div>

<!-- Next.js -->
<h3 align="center" id="nextjs"><img src="https://skillicons.dev/icons?i=nextjs" width="20" />  Next.js</h3>

<details>
<summary>  Server Side Rendering এর সুবিধা কি ?  </summary>
Ans:
</details>

<details>
<summary>  Client Components এর মধ্যেও কিভাবে Server Components রেন্ডার করা যায় ?  </summary>
Ans:
</details>

<h3 align="center" id="node-express"><img src="https://skillicons.dev/icons?i=nodejs" width="20" /> <img src="https://skillicons.dev/icons?i=express" width="20" />  Node/Express</h3>

<details>
<summary> Node এ  REPL  Context  বলতে কি বুঝায়</summary>
  Node.js REPL (Read-Eval-Print Loop) হল একটি ইন্টারেক্টিভ রানটাইম এনভায়রনমেন্ট যেখানে  Node.js কোড লিখে তা তারপরেই রান করা যায় ও Output দেখা যায়।
  
  যেমন Terminal এ node লিখে এন্টার দিলে একটি REPL এনভায়রনমেন্ট শুরু হয়। এখানে আমরা যেকোনো ধরনের জাভাস্ক্রিপ্ট কোড লিখতে পারি এবং তা রান করতে পারি।

  উদাহরণঃ

   ![image](./assets/nodeREPLExample.png)

</details>

<h3 align="center" id="database">
<img src="https://skillicons.dev/icons?i=mongodb" width="20" />
<img src="https://skillicons.dev/icons?i=mysql" width="20" />
<img src="https://skillicons.dev/icons?i=postgresql" width="20" />
  Database</h3>

  <details>
  <summary>  SQL ও No-SQL এর মধ্যে মূল পার্থক্য কি ?  </summary>
  Ans:
  </details>
