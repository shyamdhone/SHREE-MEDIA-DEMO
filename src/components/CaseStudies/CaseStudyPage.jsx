import { useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiArrowLeft, FiArrowUpRight, FiChevronLeft, FiChevronRight, FiStar, FiX } from 'react-icons/fi'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import shree from "../../assets/images/shreeji jewelry.jpg";
import shiv from "../../assets/images/shivenetra (2).jpg";
import balaji from "../../assets/images/balaji traders.jpg";
import vighnaharta from "../../assets/images/vighnaharta.jpg"; 
import shreeHero from "../../assets/images/heroImage.jpg";

gsap.registerPlugin(ScrollTrigger)

const projects = {

  aurelia: {

    name: "Shreeji Jewellery",

    industry: "Jewellery",

    category: "Brand Identity • Social Media",

    year: "2026",

    duration: "4 Months",

    team: "6 Specialists",


    platforms:[
      "Instagram",
      "Facebook",
      "Website"
    ],


    objective:
    "Create a premium digital identity that reflects the elegance and craftsmanship of Shreeji Jewellery.",


    challenge:
    "Transform a traditional jewellery business into a modern luxury brand with a strong social media presence.",


    gradient:
    "from-[#21040f] via-brand-pink to-brand-orange",


    heroImage:shreeHero,


    analytics:[
      ["120+","Posts"],
      ["25+","Campaigns"],
      ["100%","Branding"],
      ["4","Platforms"]
    ],


    results:[
      ["Social Posts","120+","Completed"],
      ["Brand Identity","100%","Delivered"],
      ["Creative Campaigns","25+","Designed"],
      ["Client Satisfaction","100%","Success"]
    ],


    testimonial:
    "A complete branding and creative solution that elevated our online presence.",


    person:
    "Shreeji Jewellery",


    role:
    "Client",


    related:[
      "Shivenetra",
      "Balaji Traders",
      "Vighnaharta"
    ],


    gallery:[
      shree,
      shiv,
      balaji,
      vighnaharta
    ]

  }

}


function Visual({
  gradient,
  variant = "ring",
  className = ""
}) {


const motif = {


ring:(

<>

<span
className="
absolute
left-[18%]
top-[22%]
size-[52%]
rounded-full
border-[clamp(14px,3vw,38px)]
border-white/75
shadow-[0_0_55px_rgba(255,255,255,.3)]
"
/>


<span
className="
absolute
right-[14%]
top-[15%]
size-[18%]
rotate-45
rounded-[30%]
bg-white/65
shadow-xl
"
/>

</>

),



phone:(

<div
className="
absolute
left-1/2
top-[10%]
h-[82%]
w-[42%]
-translate-x-1/2
rounded-[2.2rem]
border-[5px]
border-ink
bg-ink
p-1
shadow-2xl
"
>


<div
className="
relative
h-full
overflow-hidden
rounded-[1.75rem]
bg-gradient-to-br
from-brand-pink
via-brand-red
to-brand-orange
"
>


<span
className="
absolute
inset-x-4
top-12
rounded-2xl
bg-white/20
p-3
font-display
text-xl
font-semibold
text-white
"
>

Luxury
<br/>
Jewellery

</span>



<span
className="
absolute
bottom-4
left-4
right-4
rounded-xl
bg-white/85
px-2
py-2
text-center
text-[.52rem]
font-semibold
tracking-[.12em]
text-ink
"
>

SHREEJI / DAILY

</span>


</div>


</div>

),



grid:(

<div
className="
absolute
inset-[12%]
grid
grid-cols-2
gap-3
"
>

{

Array.from(
{length:4},
(_,index)=>(

<span
key={index}
className={`
rounded-3xl
bg-white/30
${index===1 ? "translate-y-8" : ""}
`}
/>

)

)

}

</div>

),




type:(

<span
className="
absolute
left-[16%]
top-[8%]
font-display
text-[15rem]
font-bold
leading-none
tracking-[-.18em]
text-white/65
"
>

S

</span>

),





arch:(

<div
className="
absolute
left-[18%]
top-[15%]
h-[70%]
w-[64%]
rounded-t-[50%]
bg-white/30
shadow-2xl
"
/>

)

};




return (

<div
className={`
relative
overflow-hidden
bg-gradient-to-br
${gradient}
${className}
`}
>


<div
className="
absolute
inset-0
bg-[radial-gradient(circle_at_23%_18%,rgba(255,255,255,.62),transparent_26%),radial-gradient(circle_at_82%_82%,rgba(0,0,0,.28),transparent_42%)]
"
/>



{
motif[variant] || motif.ring
}


</div>

)


}
function SectionIntro({ eyebrow, title, copy }) {

return (

<div className="max-w-3xl">

<p className="
mb-4 
text-[.65rem]
font-semibold
uppercase
tracking-[.18em]
text-muted
">
{eyebrow}
</p>


<h2 className="
font-display
text-4xl
font-semibold
leading-[.93]
tracking-[-.08em]
text-ink
sm:text-6xl
">

{title}

</h2>


{
copy &&

<p className="
mt-6
max-w-xl
text-sm
leading-7
text-muted
sm:text-base
">

{copy}

</p>

}


</div>

)

}

function Metric({ value, label }) {

  return (

    <div
      className="
      rounded-2xl 
      border 
      border-white/35 
      bg-white/15 
      px-4 
      py-3 
      backdrop-blur-md
      "
    >

      <p
        className="
        font-display 
        text-2xl 
        font-semibold 
        tracking-[-.08em] 
        text-white 
        sm:text-3xl
        "
      >
        {value}
      </p>


      <p
        className="
        mt-1 
        text-[.58rem] 
        font-semibold 
        uppercase 
        tracking-[.13em] 
        text-white/65
        "
      >
        {label}
      </p>

    </div>

  )

}
function Gallery({ project }) {

  const [active, setActive] = useState(null);


  return (

    <section
      className="
      bg-white
      px-4
      py-24
      sm:px-6
      sm:py-32
      "
    >


      <div className="mx-auto max-w-[1440px]">


        <SectionIntro

          eyebrow="Project Gallery"

          title={
            <>
              Crafted with
              <br />
              <span className="text-gradient">
                creativity & precision.
              </span>
            </>
          }

        />



        <div
          className="
          mt-14
          columns-1
          gap-5
          md:columns-2
          xl:columns-3
          "
        >



          {
            project.gallery.map((image,index)=>(


              <button

                key={index}

                type="button"

                onClick={() => setActive(image)}

                className="
                group
                mb-5
                block
                w-full
                break-inside-avoid
                text-left
                "

              >


                <div

                  className={`
                  overflow-hidden
                  rounded-[2rem]
                  shadow-[0_18px_45px_rgba(0,0,0,.09)]
                  ${
                    index===0 || index===3
                    ?
                    "aspect-[0.78]"
                    :
                    "aspect-square"
                  }
                  `}

                >



                  <img

                    src={image}

                    alt={`Shreeji Jewellery creative ${index+1}`}

                    loading="lazy"

                    className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                    "

                  />


                </div>




                <p
                  className="
                  mt-3
                  flex
                  items-center
                  text-sm
                  font-medium
                  text-muted
                  transition
                  group-hover:translate-x-1
                  "
                >

                  Creative {index+1}


                  <FiArrowUpRight
                    className="
                    ml-1
                    text-brand-pink
                    "
                  />


                </p>


              </button>


            ))

          }



        </div>


      </div>





      {
        active && (


          <div

            className="
            fixed
            inset-0
            z-[70]
            flex
            items-center
            justify-center
            bg-black/80
            p-6
            backdrop-blur-md
            "

            onClick={() => setActive(null)}

          >



            <button

              type="button"

              onClick={() => setActive(null)}

              className="
              absolute
              right-8
              top-8
              grid
              h-12
              w-12
              place-items-center
              rounded-full
              border
              border-white/30
              text-white
              "

            >

              <FiX size={22}/>


            </button>




            <img

              src={active}

              alt="Gallery preview"

              onClick={(e)=>e.stopPropagation()}

              className="
              max-h-[90vh]
              max-w-[90vw]
              rounded-3xl
              object-contain
              shadow-2xl
              "

            />



          </div>


        )
      }



    </section>


  )

}

function Comparison({ project }) {

  const [position, setPosition] = useState(54);


  return (

    <section
      className="
      bg-[#fafafa]
      px-4
      py-24
      sm:px-6
      sm:py-32
      "
    >


      <div className="mx-auto max-w-5xl">


        <SectionIntro

          eyebrow="Before / After"

          title="A more magnetic first impression."

          copy="
          Drag across the transformation to see how Shreeji Jewellery evolved into a premium luxury identity.
          "

        />




        <div
          className="
          relative
          mt-12
          aspect-[1.25]
          overflow-hidden
          rounded-[2rem]
          bg-black
          shadow-[0_25px_65px_rgba(0,0,0,.14)]
          "
        >



          {/* BEFORE IMAGE */}

          <img

            src={project.gallery[0]}

            alt="Before transformation"

            className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            grayscale
            "

          />





          {/* AFTER IMAGE */}

          <div

            className="
            absolute
            inset-y-0
            left-0
            overflow-hidden
            "

            style={{
              width:`${position}%`
            }}

          >


            <img

              src={project.heroImage}

              alt="After transformation"

              className="
              h-full
              w-full
              min-w-[900px]
              object-cover
              "

            />


          </div>






          {/* LABELS */}

          <span

            className="
            absolute
            left-5
            top-5
            rounded-full
            bg-black/40
            px-3
            py-1.5
            text-[.6rem]
            font-semibold
            uppercase
            tracking-[.13em]
            text-white
            "

          >

            Before

          </span>





          <span

            className="
            absolute
            right-5
            top-5
            rounded-full
            bg-white/30
            px-3
            py-1.5
            text-[.6rem]
            font-semibold
            uppercase
            tracking-[.13em]
            text-white
            "

          >

            After

          </span>






          {/* SLIDER LINE */}

          <div

            className="
            absolute
            inset-y-0
            w-[2px]
            bg-white
            "

            style={{
              left:`${position}%`
            }}

          >



            <div

              className="
              absolute
              left-1/2
              top-1/2
              grid
              size-11
              -translate-x-1/2
              -translate-y-1/2
              place-items-center
              rounded-full
              bg-white
              text-ink
              shadow-xl
              "

            >

              <FiChevronLeft
                className="absolute left-1"
              />

              <FiChevronRight
                className="absolute right-1"
              />


            </div>


          </div>







          {/* RANGE CONTROL */}

          <input

            type="range"

            min="5"

            max="95"

            value={position}

            onChange={(e)=>setPosition(Number(e.target.value))}

            aria-label="Before after comparison slider"

            className="
            absolute
            inset-0
            h-full
            w-full
            cursor-ew-resize
            opacity-0
            "

          />



        </div>



      </div>


    </section>

  )

}
function Dashboard({ project }) {

  const scope = useRef(null);


  useGSAP(() => {


    const section = scope.current;


    const counters = section.querySelectorAll(
      "[data-counter]"
    );


    const cards = section.querySelectorAll(
      "[data-dash-card]"
    );


    const bars = section.querySelectorAll(
      "[data-chart-bar]"
    );



    const values = [
      120,
      100,
      25,
      100
    ];



    ScrollTrigger.create({

      trigger: section,

      start:"top 75%",

      once:true,


      onEnter:()=>{


        counters.forEach((counter,index)=>{


          const obj = {
            value:0
          };


          gsap.to(obj,{

            value:values[index],

            duration:1.5,

            delay:index*0.1,

            ease:"power2.out",


            onUpdate:()=>{


              counter.textContent =
              index===1

              ?

              `${Math.round(obj.value)}%`

              :

              `${Math.round(obj.value)}+`;


            }


          });


        });


      }


    });





    gsap.from(cards,{

      opacity:0,

      y:30,

      stagger:0.12,

      duration:0.8,

      ease:"power3.out",


      scrollTrigger:{

        trigger:section,

        start:"top 80%"

      }


    });






    gsap.from(bars,{

      scaleY:0,

      transformOrigin:"bottom",

      stagger:0.06,

      duration:0.8,

      ease:"power3.out",


      scrollTrigger:{

        trigger:section,

        start:"top 75%"

      }


    });



  },{scope});





return (

<section

ref={scope}

className="
bg-ink
px-4
py-24
text-white
sm:px-6
sm:py-32
"

>


<div className="mx-auto max-w-[1440px]">



<SectionIntro

eyebrow="Performance dashboard"

title={
<>
Growth you can
<br/>
actually
<span className="text-gradient">
measure.
</span>
</>
}

/>






<div

className="
mt-14
grid
gap-4
sm:grid-cols-2
lg:grid-cols-4
"

>


{

project.results.map(
([label,value,gain],index)=>(


<div

key={label}

data-dash-card

className="
rounded-3xl
border
border-white/10
bg-white/[.06]
p-5
backdrop-blur-md
"

>


<p

className="
text-[.62rem]
font-semibold
uppercase
tracking-[.14em]
text-white/55
"

>

{label}

</p>



<p

data-counter

className="
mt-5
font-display
text-4xl
font-semibold
tracking-[-.08em]
"

>

0

</p>




<p

className="
mt-2
text-xs
font-semibold
text-brand-gold
"

>

{gain}

</p>





<div

className="
mt-6
h-1.5
overflow-hidden
rounded-full
bg-white/10
"

>


<span

className="
block
h-full
rounded-full
bg-gradient-to-r
from-brand-pink
to-brand-orange
"

style={{
width:`${60+(index*10)}%`
}}

/>


</div>



</div>


)

)

}



</div>







<div

className="
mt-5
rounded-[2rem]
border
border-white/10
bg-white/[.06]
p-6
sm:p-8
"

>


<div

className="
flex
items-center
justify-between
"

>


<p

className="
font-display
text-xl
font-medium
tracking-[-.05em]
"

>

Audience momentum

</p>



<p

className="
text-xs
text-white/50
"

>

Last 6 months

</p>


</div>





<div

className="
mt-10
flex
h-48
items-end
gap-2
"

>


{

[20,31,27,42,50,46,63,57,76,71,88,100]

.map((height,index)=>(


<span

key={index}

data-chart-bar

className="
flex-1
rounded-t-full
bg-gradient-to-t
from-brand-pink
via-brand-red
to-brand-orange
"

style={{
height:`${height}%`,
opacity:0.4+(index/20)
}}


/>


))


}



</div>



</div>



</div>


</section>

)


}

export function CaseStudyPage() {
  const { slug = 'aurelia' } = useParams()
  const project = projects[slug] || projects.aurelia
  const scope = useRef(null)
  useGSAP(() => { gsap.from('[data-case-hero]', { autoAlpha: 0, y: 28, stagger: .12, duration: .85, ease: 'power3.out' }); gsap.utils.toArray('[data-case-section]').forEach((section, index) => gsap.from(section, { autoAlpha: 0, x: index % 2 ? 26 : -26, duration: .8, scrollTrigger: { trigger: section, start: 'top 82%' } })) }, { scope })
return (
<main 
ref={scope} 
className="overflow-hidden bg-white pt-24"
>

{/* HERO */}
<section className="relative isolate min-h-[88vh] px-4 pb-16 pt-10 sm:px-6">

<div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-end">


<div className="relative z-10 py-8 lg:pb-16">

<Link
data-case-hero
to="/work"
className="inline-flex items-center gap-2 text-xs font-medium text-muted transition hover:-translate-x-1"
>

<FiArrowLeft/>
Back to work

</Link>


<div data-case-hero className="mt-14">

<span className="rounded-full border border-black/10 px-3 py-1.5 text-[.62rem] font-semibold uppercase tracking-[.13em] text-muted">
{project.industry}
</span>


<p className="mt-6 text-[.66rem] font-semibold uppercase tracking-[.17em] text-muted">
{project.category} · {project.year}
</p>


<h1 className="mt-4 font-display text-7xl font-semibold leading-[.8] tracking-[-.1em] sm:text-8xl xl:text-9xl">
{project.name}
</h1>


<p className="mt-7 max-w-sm text-sm leading-7 text-muted">
A modern expression for a brand built to be remembered.
</p>


</div>

</div>



<div
data-case-hero
className="relative overflow-hidden rounded-[2.25rem] shadow-[0_30px80px_rgba(33,11,20,.2)]"
>


<div
className="
relative
min-h-[33rem]
overflow-hidden
rounded-[2.25rem]
shadow-[0_30px_80px_rgba(33,11,20,.2)]
sm:min-h-[42rem]
"
>


<img
src={project.heroImage}
alt={project.name}
className="
absolute
inset-0
h-full
w-full
object-cover
"
/>


{/* Luxury dark overlay */}

<div
className="
absolute
inset-0
bg-gradient-to-br
from-black/40
via-transparent
to-black/20
"
/>



{/* Metrics */}

<div
className="
absolute
bottom-5
left-5
right-5
grid
grid-cols-2
gap-2
sm:grid-cols-4
"
>

{
project.analytics.map(([value,label])=>(

<Metric
key={label}
value={value}
label={label}
/>

))

}

</div>


</div>


<div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-2 sm:grid-cols-4">

{
project.analytics.map(([value,label])=>(

<Metric
key={label}
value={value}
label={label}
/>

))
}

</div>


</div>


</div>

</section>



{/* OVERVIEW */}

<section 
data-case-section
className="bg-[#fafafa] px-4 py-24 sm:px-6 sm:py-32"
>


<div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.85fr_1.15fr]">


<SectionIntro
eyebrow="Project overview"
title="A new standard for modern luxury."
/>


<div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">

{
[
["Client",project.name],
["Industry",project.industry],
["Duration",project.duration],
["Team size",project.team],
["Platforms",project.platforms.join(" · ")],
["Objective",project.objective]

].map(([label,value])=>(


<div 
key={label}
className="border-t border-black/[.08] pt-3"
>

<p className="text-[.6rem] font-semibold uppercase tracking-[.14em] text-muted">
{label}
</p>


<p className="mt-2 text-sm leading-6 text-ink">
{value}
</p>


</div>


))
}

</div>


</div>

</section>





{/* CHALLENGE */}

<section 
data-case-section
className="px-4 py-24 sm:px-6 sm:py-32"
>


<div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1fr_.9fr]">


<SectionIntro
eyebrow="The challenge"
title={
<>
Beautiful product.
<br/>
No digital gravity.
</>
}
copy={project.challenge}
/>



<div className="grid gap-4">


{
[
"A crowded category without a clear point of view.",
"An offline story that had not translated online.",
"High-value pieces needing high-value attention."

].map((item,index)=>(


<div
key={item}
className="flex gap-4 rounded-2xl border border-black/[.07] p-5"
>


<span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-pink/10 text-xs font-semibold text-brand-pink">

0{index+1}

</span>


<p className="text-sm leading-6 text-muted">
{item}
</p>


</div>


))

}


</div>


</div>

</section>





{/* STRATEGY */}

<section 
data-case-section
className="bg-[#fafafa] px-4 py-24 sm:px-6 sm:py-32"
>


<div className="mx-auto max-w-[1440px]">


<SectionIntro
eyebrow="Our strategy"
title={
<>
One clear world,
<br/>
across every touchpoint.
</>
}
/>



<div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

{
[
"Content Strategy",
"Brand Identity",
"Paid Advertising",
"Reels",
"Photography",
"Website",
"Creative Direction"

].map((item,index)=>(

<article
key={item}
className="group rounded-3xl border border-black/[.06] bg-white p-6 shadow-[0_14px_42px_rgba(0,0,0,.05)] transition duration-500 hover:-translate-y-2"
>


<span className="font-display text-sm text-brand-pink">
0{index+1}
</span>


<h3 className="mt-12 font-display text-2xl font-medium tracking-[-.06em]">
{item}
</h3>


<span className="mt-4 block h-px w-0 bg-gradient-to-r from-brand-pink to-brand-orange transition-all duration-500 group-hover:w-full"/>


</article>

))

}

</div>


</div>


</section>





<Gallery project={project}/>



{/* SOCIAL */}

<section 
data-case-section
className="bg-[#fafafa] px-4 py-24 sm:px-6 sm:py-32"
>


<div className="mx-auto max-w-[1440px]">


<SectionIntro
eyebrow="Social media showcase"
title={
<>
Built for the
<br/>
<span className="text-gradient">
scroll and the save.
</span>
</>
}
/>



<div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

{
[
"Reel — behind the glow",
"Editorial post — new collection",
"Story series — made to linger"

].map((label,index)=>(


<article 
key={label}
className="overflow-hidden rounded-[1.75rem] bg-white p-2 shadow-xl"
>


<div className="relative aspect-[.9] overflow-hidden rounded-[1.35rem]">

<Visual
gradient={project.gradient}
variant={index===1?"type":"phone"}
className="h-full"
/>


</div>


<p className="p-4 text-sm font-medium">
{label}
</p>


</article>


))

}

</div>


</div>


</section>





<Dashboard project={project}/>


<Comparison project={project}/>





{/* TESTIMONIAL */}

<section
className="bg-white px-4 py-24 sm:px-6 sm:py-32"
>

<div className="mx-auto grid max-w-5xl gap-10 rounded-[2.25rem] bg-[#fafafa] p-7 sm:p-12 lg:grid-cols-[.72fr_1.28fr]">


<div className="grid aspect-square place-items-center rounded-[1.8rem] bg-gradient-to-br from-brand-pink via-brand-red to-brand-orange">

<span className="font-display text-8xl font-bold text-white/80">
S
</span>

</div>


<div>

<div className="flex gap-1 text-brand-orange">

{
Array.from({length:5},(_,i)=>
<FiStar key={i} fill="currentColor"/>
)
}

</div>


<blockquote className="mt-5 font-display text-3xl">
“{project.testimonial}”
</blockquote>


<p className="mt-7 font-medium">
{project.person}
</p>


<p className="text-xs text-muted">
{project.role}
</p>


</div>


</div>

</section>





{/* RELATED */}

<section
className="bg-[#fafafa] px-4 py-24 sm:px-6"
>

<div className="mx-auto max-w-[1440px]">


<SectionIntro
eyebrow="Related projects"
title="More brands in motion."
/>


<div className="mt-12 grid gap-5 md:grid-cols-3">

{
project.related.map((name,index)=>(


<Link
key={name}
to="/work"
className="group"
>


<div className="relative aspect-[1.05] overflow-hidden rounded-[2rem]">


<Visual

gradient={[
"from-[#422016] via-[#b95731] to-brand-gold",
"from-[#f6b2ca] via-[#f27897] to-[#e96a20]",
"from-[#20222b] via-[#5b6074] to-[#b9b3a8]"
][index]}


variant={[
"arch",
"grid",
"type"
][index]}


className="h-full transition duration-700 group-hover:scale-105"

/>


</div>


<p className="mt-4 font-display text-2xl">
{name}
</p>


</Link>


))

}


</div>


</div>


</section>





{/* CTA */}

<section className="px-4 pb-12 sm:px-6">

<div className="mx-auto flex max-w-[1440px] flex-col gap-7 rounded-[2.25rem] bg-gradient-to-r from-brand-pink via-brand-red to-brand-orange px-7 py-12 text-white md:flex-row md:justify-between">


<div>

<p className="text-xs uppercase tracking-widest text-white/60">
Start something memorable
</p>


<h2 className="mt-4 font-display text-5xl">
Ready to grow
<br/>
your brand?
</h2>


</div>



<Link
to="/contact"
className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink"
>

Book Free Strategy Call

<FiArrowUpRight className="ml-2 inline"/>

</Link>


</div>

</section>


</main>
)}
