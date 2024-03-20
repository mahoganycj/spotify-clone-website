"use client";

import Image from "next/image";
import { useState } from "react";
import Sidebar from "./components/SideBar";

export default function Home() {
  return (
    <div className="w-full h-screen grid grid-cols-[max-content_auto] grid-rows-[5fr_1fr] gap-y-2 p-2 bg-black">

      <Sidebar />

      <div className="bg-secondary02 grid grid-cols-[1fr] overflow-hidden rounded-lg">
        <div className="overflow-y-auto">
          <div className="sticky top-0 h-20 w-full p-5 bg-black/50">.Header</div> 
          <p className="p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati possimus quia quod dolores aspernatur dolore ullam quisquam odit. Quos, magnam? Odio quisquam quis non delectus sequi, consectetur eveniet corporis beatae magnam animi ea exercitationem illo ipsa quod eos? Vero odio, dicta dolorum velit quaerat magnam excepturi vel temporibus non earum eaque obcaecati optio libero dignissimos pariatur impedit, exercitationem tempora? Laudantium eius libero sed necessitatibus quidem! Molestias sapiente aliquid blanditiis similique optio? Fuga quod enim vitae assumenda eligendi facilis illo, itaque quos, adipisci, quo praesentium similique earum obcaecati quia deleniti eaque iure ipsa laboriosam delectus aspernatur distinctio. Esse assumenda distinctio cupiditate natus vel est sapiente repudiandae earum dignissimos quia fugit, aut tempore odio vero a hic eos totam obcaecati qui atque rerum ducimus voluptatem. Quia fuga quas odit praesentium? Porro eos culpa, doloribus qui dolor provident aliquam expedita dicta ut. Expedita porro facere esse aliquam modi nemo repudiandae non illum totam mollitia, illo, maiores veritatis rerum. Quod neque ipsam reprehenderit nam quo tenetur harum deleniti sit vitae placeat odio, pariatur aspernatur fugit blanditiis obcaecati dolor rerum autem labore, mollitia ipsa. Voluptas neque blanditiis quod perferendis alias? Laboriosam perferendis eaque nesciunt. Ipsam ea repellendus ab, in voluptates aliquam enim totam temporibus. Sunt ex adipisci dolor aperiam nesciunt porro explicabo velit dolores, doloribus dicta totam vitae quo distinctio, laboriosam rem, animi quos fuga corrupti voluptatum sint qui repudiandae quod iste! Delectus sequi, nemo dignissimos similique amet ullam sed repellendus officia iusto modi corporis impedit, eius mollitia recusandae nesciunt voluptatibus doloribus. Facilis porro minima non recusandae accusantium, quaerat corrupti perferendis dolores unde perspiciatis aliquam, doloribus atque molestias nobis quae exercitationem earum maxime velit aut! Praesentium rem optio veritatis esse, possimus perferendis quam. Corporis assumenda consequatur earum eligendi, totam possimus beatae quod ab libero consectetur quasi, modi quia laboriosam iste obcaecati, perspiciatis pariatur. Similique tenetur dolorem reprehenderit culpa assumenda fugit, incidunt debitis nostrum architecto molestias vitae perferendis amet quasi dolorum quaerat? Ea, veritatis! Doloribus ipsa neque repellat, magni minima quia, obcaecati eveniet maxime iste repellendus esse qui beatae, tenetur nesciunt! Unde illo mollitia nemo veniam ab maxime sit perferendis nesciunt tenetur facere incidunt ratione sint ex ducimus consequatur, cum ad delectus. Minima, ex! Excepturi omnis magni commodi dolorem adipisci. Deleniti repellendus quasi voluptate eaque quod eum architecto unde exercitationem pariatur, odio fugiat debitis rem ratione alias nobis eligendi cupiditate amet, est aliquam natus quia omnis ipsum. Recusandae quidem ad saepe ipsam sunt vel. Iure nihil ut autem sit laborum. Saepe quas cum ea nisi aliquam quaerat repellat corporis dolorem dolore eligendi. Iure mollitia id architecto magnam illum modi quos maxime suscipit iste. Ex aut maiores doloremque quis assumenda corrupti delectus reprehenderit exercitationem! Suscipit quod doloribus quis alias qui distinctio ad soluta sit a perspiciatis saepe error nam voluptates consectetur aliquam quam, vero veritatis dicta tenetur cumque ratione impedit! Saepe odio et dolores aperiam eveniet repudiandae ipsum, provident in, deserunt accusamus explicabo eligendi ea minus hic quis ullam consequuntur! Sed molestias, ducimus eligendi tenetur accusamus nesciunt veniam tempora perspiciatis alias sunt incidunt nisi voluptas ipsa consectetur!
          </p>
          <div className="bg-secondary02 sticky top-0 h-20 w-full p-5">.Footer</div>
        </div>
      </div>

      <div className="bg-slate-800">Song name</div>
      <div className="bg-slate-500">Player controls</div>

    </div>
  );
}
