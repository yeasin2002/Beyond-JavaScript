## We Don't Know JS

#### JavaScript ও Web Development এর Eco System গভিরভাবে জানার জন্য ও ইন্টারভিউ জিজ্ঞাসা করার মত গুরুত্বপূর্ণ সব প্রশ্ন ও উত্তর সমূহ একত্রে । আশা করি প্রতিটি Developer উপকৃত হবেন ।

<h5 >
এই রিপোটি  <a href="https://learnwithsumit.com/">Learn With Sumit </a>,
  <a href="https://www.youtube.com/@anisul-islam">Anisul Islam  </a>, 
  <a href="https://www.youtube.com/@StackLearner">Stack Learner </a> সব অন্য সকল বাংলাদেশী কন্টেন্ট ক্রিয়েটর ও লেখকদের উৎসর্গ  করা হল ।
</h5>

<br>

### নির্দেশনা

- কোনো সাজেসন্স,রিকুয়েস্ট থাকলেঃ <a href="https://github.com/yeasin-2002/We-Do-not-Know-JS/issues"> Issue </a> ক্রিয়েট করুন

- কোনো প্রশ্ন না বুঝলে বা বিস্তারিত জানতে চাইলেঃ <a href="https://github.com/yeasin-2002/We-Do-not-Know-JS/discussions"> Discussion </a> এ জিজ্ঞাসা করুন ।

- Contribute করতে চান চাইলেঃ <a href="https://github.com/yeasin-2002/We-Do-not-Know-JS/blob/main/CONTRIBUTING.md"> Contributions Guideline </a> পড়ুন ।

<br>

### সকল কন্ট্রিবিউটোরস 

 <img src="https://contrib.rocks/image?repo=yeasin-2002/We-Do-not-Know-JS" />

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

| পার্থক্য  | Local Storage                                                        | Session Storage            |
| --------- | -------------------------------------------------------------------- | -------------------------- |
| স্থায়ীত্ব | মা্যানুয়ালি বা প্রোগ্রামিক্যালি ব্রাউজার ডাটা ক্লিয়ার না করা পর্যন্ত | ট্যাব ক্লোস করার সাথে সাথে |
| এভাইলেবল  | সকল window তেই                                                       | নির্দিষ্ট ট্যাবেই          |
| উপযোগী    | দীর্ঘ সময় ডাটা রাখায়                                                 | আল্প সময় ডাটা রাখায়        |

</details>

<details>
<summary> ২. DOM ও BOM এর মধ্যে পার্থক্য কি ?  </summary>

#### BOM ও DOM ব্রাউজারের JavaScript এর Window Object এর উপাদান । ব্রাউজারে সকল কিছু window নামের একটা master object এর থেকে একসেস করা যায়

BOM ও DOM এর মধ্যে পার্থক্য হলোঃ

| বিষয়          | DOM                                                              | BOM                                                |
| ------------- | ---------------------------------------------------------------- | -------------------------------------------------- |
| পূর্ননাম      | Document Object Model                                            | Browser Object Model                               |
| ব্যখ্যা       | HTML ও XML documents যার মাধ্যমে হোস্ট এনভাইরমেন্ট এর স্ট্রাকচার | ব্রাউজার স্পেসিফিক ফাংশনালিটি                      |
| উপাদান        | Elements, Attributes, Text, etc.                                 | Window, Screen, Location, History, Navigator, etc. |
| নিয়ন্ত্রনকারী | W3C                                                              | প্রতিটি ব্রাউজারে ভিন্ন ভিন্নভাবে ইম্প্লিমেন্ট করে |

</details>

<details>
<summary>৩.  Pure Function কাকে বলে ?     </summary>

#### Computer Science এর ভাষায় যে সকল function ইন্টার্নাল লজিক নিয়ে থাকে ও একই Input এর জন্য একই Output দিয়ে থাকে তাকে Pure Function বলে ।

এর ২টা বৈশিষ্ট থাকে

- নিজের বিজনেস লজিক নিয়ে কনসার্ন ।
- Same Input এর জন্য Same output দিয়ে থাকে ।

Pure Function এর উদাহরণঃ

<img src="./assets/pureFnExample.png"  width="500px" />

এখানে pureFn কে Input হিসেবে যতবারই ২ দেয়া হবে এটি প্রতিবার ৪ রিটার্ন করবে ।

এখানে Pure function নীতি ২টি সঠিকভাবে ফলো করা হয়েছে ।

১. প্রতিবার same input এর জন্য same output দিবে ।

২. বাহিরের কোনো প্রকার স্টেট বা কিছু প্ররিরর্তন করে নাই

অপরদিকে,

<img src="./assets/impureFnExample.png"  width="500px" />

impureFn এর ক্ষেত্রে Pure function নীতি ২টি সঠিকভাবে ফলো করা হয়নি ।

১. প্রতিবার same input দিলেও আলাদা আলাদা output দিচ্ছে ।

২. এটি বাহিরের count variable পরিবর্তন করছে, অর্থাৎ শুধুমাত্র নিজের লজিক নিয়ে কনসার্ন না , function টি নিজের body এর বাহিরের কিছু পরিবর্তন করে ফেলেছে ।

তাই এটি pure function না ।

</details>

<details>
<summary>৪.  Falsy  ভ্যালু কোনগুলেকে বলে?  </summary>

#### 0, "", null, undefined, NaN, false এগুলোকে falsy ভালু বলে ।

</details>

<details>
<summary>৫.  falsy ও  nullish ভ্যালু এর মধ্যে পার্থক্য কি ?  </summary>

#### Falsy value বলতে 0, "", null, undefined, NaN, false কে বুঝায় এবং nullish value বলতে null, undefined কে বুঝায় ।

nullish value মুলত falsy value এর সাবসেট ।

##### ওপারেটর

- falsy value এর জন্য || দিয়ে চেক করা যায়
- nullish value ডিটেক্ট করতে ?? ব্যবহার করা হয়

</details>

 <details>
 <summary>৬.   Shallow Copy ও Deep Copy বলতে কি বুঝায়?   </summary>

#### কোনো Object বা Array ১ লেভেল ডিপ কপি করতে গেলে তাকে Shallow Copy বলে । আর ২ লেভেল বা ততোধিক ডিপ কপি করতে গেলে তাকে Deep Copy বলে ।

#### উদাহরণঃ

১. Shallow Copy

  <img src="./assets/shallowCopyExample.png" width="500px" >

এখানে,
original array কে Spread Oparetor দিয়ে কপি করা হয় ।
যেহেতু origianl array এর মাঝে অবজেক্ট আছে তাই এখানে অবজেক্ট এর ক্ষেত্রে একই রেফারেন্স দিয়ে কপি হয়েছে । তাই যখন আমরা original array এর অবজেক্ট এর কোনো প্রপার্টি চেঞ্জ করবো তখন কপি করা array এর অবজেক্ট এর কোনো প্রপার্টি চেঞ্জ হয়ে যাবে ।

২. Deep Copy

  <img src="./assets/deepCopyExample.png" width="500px" >

এখানে,
original object কে Spread Oparetor দিয়ে কপি করা হয় এবং তার পাশাপাশি এর ভিতরের Object কেউ আবার Spread Oparetor দিয়ে কপি করা হয়েছে । তাই এডি ২ লেভেল নেস্টেড হবার পরো সম্পুর্ন Deeply Copy হয়ে

Tips: অনেক লেভেলের ডিপ কোনো Object/Array যদি Immutadly পরিবর্তন

 </details>

<details>
<summary>৭.  Deep Copy   এর ক্ষেত্রে JSON.stringify ও পরে আবার JSON.parse করে  করলে এই  পদ্ধতি কি ব্যবহার করা  উচিত?    </summary>
<img src="./assets/json_strinify_persepng.png" width="500px" >
</details>

 <details>
 <summary>৮.  Event Propagation ও Event Delations  কাকে বলে?  </summary>
 
 ### Event Propagation
  JavaScript-এ Event Propagation হলো একটি ইভেন্ট হ্যান্ডলিং প্রক্রিয়া যা তিনটি ফেজে ঘটে: Capturing Phase, Target Phase, এবং Bubbling Phase. এই তিনটি ফেজে ঘটে একটি ইভেন্ট হ্যান্ডলিং প্রক্রিয়া।

### Event Delations

প্যারেন্ট এলিমেন্ট এর উপর একটি ইভেন্ট হ্যান্ডলার সেট করে এবং এই ইভেন্ট হ্যান্ডলার এর মাধ্যমে চাইল্ড এলিমেন্ট এর উপর ইভেন্ট হ্যান্ডলার সেট করা হয় তাকে Event Delations বলে ।

 </details>

  <details>
  <summary>৯.  Event Bubbling  বনাম Event Delegations এর মধ্যে  পার্থক্য কি?  </summary>
  Ans:
  </details>

  <details>
  <summary> ১০.  event.target ও event.currentTarget ও this.target  এর মধ্যে পার্থক্য কী ? </summary>
  Ans: 
  </details>

  <details>
  <summary>১১. Single Responsible principal কাকে বলে?  </summary>
  Ans:
  </details>

  <details>
  <summary>১২.  primitive ও   non-primitive data types  এর  মধ্যে  পার্থক্য কি? উভয়ের একটী করে উদাহরণ দেও
   </summary> 


  <img src="./assets/json_strinify_persepng.png" width="500px" >
  </details>

  <details>
<summary> ১২. JavaScript এ   null and Undefined এর মধ্যে পার্থক্য কি ?   </summary>
Ans:
</details>

<details>
<summary> ১৩. event.target ও event.CurrentTarget  ও this.target এর  মধ্যে পার্থক্য কি ?  </summary>
Ans:
</details>

<details>
<summary>১৪.  “Array, Objects are mutable and string, number, Boolean  are immutable “ এখানে mutable ও immutable দ্বারা কি বুঝানো  হয়েছে ।  </summary>
Ans:
</details>

</div>

<h3 align="center" id="reactjs"><img src="https://skillicons.dev/icons?i=react" width="20" />  React.js</h3>

<div> 
 <details>
 <summary> ১.  React ও React-DOM কী? Website বানাতে ২টি আলাদা আলাদা ইন্সটল কেন করতে  হয়?  </summary>
 
React.js বলতে React ও React-DOM  এর সমন্বয়ে একটা  প্যাকেজ বুঝায় । যদিও ২টি আলাদা আলদা ভূমিকা রাখে  ।

##### React : এটি মূলত JavaScript ওয়েব ও অ্যাপ এর জন্য একটি প্যাকেজ ও কাচামাল বলা যায় ।

কিভাবে রিয়েক্ট কাজ করবে তার নির্ধারণ করে ।

##### React-DOM : Browser DOM এর একটি কপি বা শেডো ডম । মূলত React এ কোনো State পরিবর্তন হলে সেটি আগে Virtual-DOM (V-DOM) এ সেটি পরিবর্তন করে এবং তা ডিফিং বা রি- কনসালেসশন এলগোরিদম এর মাধ্যমে কোন component এ পরিবর্তন হয়েছে সেটি এই খসড়া ডমে পরিবর্তনের এরপর সারর্জিক্যাল অপারেশনের এর মাধ্যমে মূল ডমে পরিরর্তন করে

 </details>

 <details>
 <summary>২.  “React is Reactive ” এইটি দ্বারা React কি  বুঝাতে চাচ্ছে? </summary>
 
 ### React এর কোনো State   পরিবর্তনের সাথে সাথে Component Re-render এর মাধ্যমে Updated Sate টি Brower DOM এ  Automatically পরিরর্তন করে ।  তাই বলে হয় রিয়েক্ট রিয়েক্টিভ  মানে State  পরিবর্তনের  সাথে সাথে তা রিয়েক্ট করে ও তার  ফলাফল মূল ডমে রিফলেক্ট করে

 </details>

 <details>
 <summary>৩.  HTML,CSS  এর রেন্ডারিং প্রোসেস কি কি?  </summary>
 Ans:
 </details>
 
 <details>
 <summary>৪.  React State Update এর ক্ষেত্রে Batch Update বলতে কি বুঝায় ? </summary>

### React এর কোনো State Update হলে তা সাথে সাথে মূল ডমে পরিবর্তন রিফলেক্ট করে না । অর্থাৎ, একত্রে পরিবর্তিত Sate সমূহ মূল ডমে Update করে ।

অনেক State একত্রে গ্রুপ আকারে update করাকেই Batch Update বলা হয় ।

 </details>

 <details>
 <summary>৫.  একাধিক DOM Operations এর ক্ষেত্রে Browser DOM  কি আসলেই Slow?   এক্ষেত্রে React  কিভাবে DOM Operations Optimize করতে পারে ।  </summary>
 
###  Browser DOM Operations  Slow নয় তবে পার্সিনং থেকে  Display পার্ট    প্রতি অপারেশনের  করতে হয় ।    এক্ষেত্রে React.js Batch Update এর মাধ্যমে   একত্রে সব State update  করে ।

#### ফলে কম ওপারেশন হয় সেটির ক্ষেত্রে কম Parsing and Display process থাকায় DOM Optimize হয়

 </details>

 <details>
 <summary>৬.  ডিফিং বা  রি- কনসালেসশন এলগোরিদম কাকে বলে? এবং React-DOM এটিকে কোন ক্ষেত্রে ব্যবহার  করে ? </summary>
Application এর কোনো State পরিবর্তন হলে সেটি  রেন্ডার ট্রি এর মাঝে খুজঝে তা মূল ডমে তা update  করতে  Diffing Algorithm  ব্যবহার করা হয় ।

#### মূলত, রিয়েক্ট একটি Component Tree বা Render Tree মেইন্টাইন করে । তাই কোনো Component এ State পরিবর্তন হলে সেই Component টি রেন্ডার ট্রি থেকে খুজে বের করার জন্য যে Algorithm ব্যবহার করে তাকে ডিফিং বা রি- কনসালেসশন এলগোরিদম বলে ।

 </details>

 <details>
 <summary>৭.  React Component এর নাম Capital Letter দিয়া শুরু কেন করতে হয় ?  </summary>
 Application এর function  JSX  রিটার্ন করতে পারে আবার অন্য যেকোনো ভ্যালু ।

এক্ষেত্রে কোনটি JSX রিটার্ন করে এমন , অর্থাৎ কোনটী কোম্পোনেন্ট আর কোনটি সাধারণ function তার নির্নয়ের জন্য Component এর নামে Capital Letter দিয়ে শুরু করতে হয় ।

 </details>

 <details>
 <summary> ৮.  “Props are Immutable” এর মানে কি ?  </summary>


React Components এর Props হিসেবে একটি Object পেয়ে থাকে ।
যেমন

```jsx
**export const ReactComponentsDemo = (props) => {
 const {name,id} = props;

  return <div >index</div>;
};**
```

এই Props নামের Object a আমরা name, id পাচ্ছি ।

উদাহরণ হিসেবে এমন ধরতে পারি,

```jsx
{
id: 1,
name: "yeasin",
}
```

এক্ষেত্রে কোনো কারনে বা কোনো event এর মাধ্যমে state পরিবর্তন হয়ে name = “md kawsar islam yeasin ” হয়ে গেল ।

এক্ষেত্রে, মনে হতে পারে update হবার কারনে name এর ভ্যালু পরিবর্তন করবে props এর, কিন্তু Props are immutable এর মানে বুঝায় এর কোনো ভ্যালু পরিবর্তন হলে পরবরর্তী রেন্ডারে আবার নতুন একট object পাবে । শুধুমাত্র updated value টা নয়

অর্থাৎ, এর পরবর্তীতে রি রেন্ডারে props হবে

```jsx
{
id: 1,
name: "md kawar islam  yeasin",
}
```

 </details>

 <details>
 <summary>৯.  JSX Components  কে কেন কোনো প্যারেন্ট কম্পোনেন্ট বা Fragment দিয়ে Wrap করতে হয় ?  </summary>

React Component JSX রিটার্ন করে । JSX মূলত একটি Object । প্রতিটী html tag Object হিসেবে শেষে কম্পাইল করে ।

আমরা জানি, কোনো function যেকোনো একটি মাত্র ভ্যালু রিটার্ন করে ।

তাই যদি একটি মাত্র element বা Fragment দিয়া Wrap করা থাকে তাহলে একটি Object এর মধ্যে বাকি সব element গুলো nested object আকারে থাকে ও তা রিটার্ন করে ।

 </details>

 <details>
 <summary>১০.  React এ List রেন্ডার করতে হলে Array.prototype.map ব্যবহার করা হয়। map ব্যাতিত forEach,for loop,while loop এর মাধ্যমেও কি  List রেন্ডার করা যায় ? হ্যা হলে কিভাবে?  </summary>
### List Render এর ক্ষেত্রে আমরা map ব্যবহার করে থাকি ।

যেমনঃ

```tsx
import { Fragment } from "react";
import { Component1, Component2, Component3 } from "./Components";

const App = () => {
  const list = [Component1, Component2, Component3];
  return (
    <div>
      <h1>App</h1>
      {list.map((Val, index) => {
        return (
          <Fragment key={index}>
            <Val /> {/* প্রতিটি JSX Component এখানে  Call হচ্ছে  */}
          </Fragment>
        );
      })}
    </div>
  );
```

### আমরা Array.prototype.map কেন ব্যবহার করি ?

React এর রেন্ডারের জন্য চাই JSX Return করে এমন function বা React কম্পোনেন্ট ।

এক্ষেত্রে map একটি নতুন modified array রিটার্ন করে । যা সরাসরি UI এর মাঝে ব্যবহার করতে পারে । উপরের Examples এর ক্ষেত্রে Array.prototype.map ব্যবহার করায় list এর modified একটি Array of Components আমরা পাই যা React তা সরাসরি UI তে রেন্ডার করতে পারছে ।

 </details>

 <details>
 <summary> ১১.  List রেন্ডার এর ক্ষেত্রে প্রতিটি element কে কেন আলাদা আলাদা key দিতে হয় ? যদি key না দেয়া হয় তাহলে default ভাবে কি কী হিসেবে  নেয়?  </summary>
 
### React এ List Render করার ক্ষেত্রে প্রতিটি element কে আলাদা আলাদা key দিতে হয় । যদি প্রোগ্রামার key না দেয় তাহলে এটি Default ভাবে Index কে  key হিসেবে নিয়ে থাকে ।

### index কে key হিসেবে দেয়া কেন উচিত নয় ?

index কে যদি key হিসেবে দেই তাহলে এক্ষেত্রে কিছু সমস্যা হতে পারে । যেমনঃ

ধরি,

1. List of Components যা map করে UI তে দেখানো হল । এখানে প্রতিটি elements এর key তাদের index কে দেয়া হল ।
2. onClick কোনো event এ ১ম index এর Component কে remove করা হল ।
3. এখন ২য় element টি হয়ে যাবে ১ম element । যেহেতু array এর ১ম elements টি remove করা হয়েছে তাই ২য়টির index হবে ১ম টির index অর্থাৎ 1 .
4. রিয়েক্ট মূলত index দিয়ে ট্রাক রাখে । এক্ষেত্রে React সঠিকভাবে ট্রাক রাখাতে পারবে না । কারন তার অনুযায়ী 1 index ওলা Component টি remove করা হয়েছে কিন্তু এখন আবার আবার দেখা যাচ্ছে যে আবার 1 index এর কোনো component আছে । এক্ষেত্রে React কনফিউসড হয়ে যাবে ।
5. এসল ক্ষেত্রে Wired Behave করতে পারে ।

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
