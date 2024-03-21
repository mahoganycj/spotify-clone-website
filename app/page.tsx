"use client";

import Image from "next/image";
import { useState } from "react";
import Sidebar from "./components/SideBar";
import Header from "./components/Header";
import ThinCard from "./components/Cards/ThinCard";
import { data } from "./components/data";
import SongCard from "./components/Cards/SongCard";

export default function Home() {
  return (
    <div className="w-full h-screen grid grid-cols-[max-content_auto] grid-rows-[5fr_1fr] gap-y-2 p-2 bg-black">
      <Sidebar />

      <div className="bg-secondary02 grid grid-cols-[1fr] overflow-hidden rounded-lg">
        <div className="overflow-y-auto">
          <div className="sticky top-0 h-20 w-full p-5 bg-black/50 z-10">
            <Header />
          </div>
          {/* <div className="w-full bg-red-400 h-5"></div> */}
          <div className="flex flex-row flex-wrap items-center gap-2">
            {data.map((data) => {
              return <ThinCard image={data.image} title={data.title} />;
            })}
          
          </div>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              possimus odio exercitationem natus voluptate numquam, ea non odit
              ducimus aliquam quos, est eos repudiandae tempore, blanditiis
              dolor officiis. Commodi, ipsa. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ex iste sunt aut cumque eius cum
              itaque officia dolore expedita mollitia, exercitationem eos
              nostrum odio? Eveniet, assumenda provident quam veritatis
              accusamus saepe, quasi sequi natus nam sed voluptatem harum velit
              voluptates autem at? Quis, culpa veritatis distinctio harum, ea
              blanditiis eos quam nemo rem molestias quaerat dolore corrupti
              vero dicta quia deserunt. Maiores voluptatem eveniet eos ipsum ab
              non. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Saepe molestiae ab ea quia, sint, mollitia asperiores itaque id
              molestias alias dolorum magni laudantium necessitatibus nam
              doloremque ratione debitis dolorem suscipit iure voluptatibus
              iusto non, voluptatum eum! Quaerat aspernatur cumque inventore
              soluta dignissimos veritatis blanditiis error, nesciunt obcaecati
              ullam pariatur itaque iste adipisci aut quo! Vitae nostrum ullam
              eum ea quod beatae quae sequi aspernatur. At perferendis incidunt
              temporibus distinctio ipsam ratione fugiat nam modi magni neque!
              Cum aut nemo voluptatum natus aperiam. Labore natus soluta, est
              ratione voluptatibus aperiam rerum inventore ipsam quod
              necessitatibus illum debitis odio sit rem harum ullam corporis
              eligendi repellat, suscipit unde impedit quis error maiores
              facere. Natus odit veritatis, quam cupiditate eum ipsum minus ex
              ut ducimus error repudiandae quisquam unde vero dolores id. Eos
              quia pariatur rerum, quaerat facilis, suscipit neque laboriosam
              tempora deleniti provident architecto distinctio vero cupiditate
              est voluptate placeat inventore. Rem repudiandae blanditiis quam
              aliquam illum, tempora alias suscipit eligendi veniam error facere
              id tempore quos dolorum obcaecati? Quae ex fuga tempore ut fugit
              temporibus beatae ab, quisquam excepturi sequi cumque unde quod
              perferendis laborum, error quaerat! Maxime blanditiis quibusdam
              distinctio, itaque, sint facere velit nisi vitae quia sed quod?
              Facere nemo nulla, voluptates atque laborum, assumenda adipisci,
              ipsum laudantium accusantium dignissimos recusandae iusto. Dolorum
              sint quos ab sit!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              possimus odio exercitationem natus voluptate numquam, ea non odit
              ducimus aliquam quos, est eos repudiandae tempore, blanditiis
              dolor officiis. Commodi, ipsa. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ex iste sunt aut cumque eius cum
              itaque officia dolore expedita mollitia, exercitationem eos
              nostrum odio? Eveniet, assumenda provident quam veritatis
              accusamus saepe, quasi sequi natus nam sed voluptatem harum velit
              voluptates autem at? Quis, culpa veritatis distinctio harum, ea
              blanditiis eos quam nemo rem molestias quaerat dolore corrupti
              vero dicta quia deserunt. Maiores voluptatem eveniet eos ipsum ab
              non. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Saepe molestiae ab ea quia, sint, mollitia asperiores itaque id
              molestias alias dolorum magni laudantium necessitatibus nam
              doloremque ratione debitis dolorem suscipit iure voluptatibus
              iusto non, voluptatum eum! Quaerat aspernatur cumque inventore
              soluta dignissimos veritatis blanditiis error, nesciunt obcaecati
              ullam pariatur itaque iste adipisci aut quo! Vitae nostrum ullam
              eum ea quod beatae quae sequi aspernatur. At perferendis incidunt
              temporibus distinctio ipsam ratione fugiat nam modi magni neque!
              Cum aut nemo voluptatum natus aperiam. Labore natus soluta, est
              ratione voluptatibus aperiam rerum inventore ipsam quod
              necessitatibus illum debitis odio sit rem harum ullam corporis
              eligendi repellat, suscipit unde impedit quis error maiores
              facere. Natus odit veritatis, quam cupiditate eum ipsum minus ex
              ut ducimus error repudiandae quisquam unde vero dolores id. Eos
              quia pariatur rerum, quaerat facilis, suscipit neque laboriosam
              tempora deleniti provident architecto distinctio vero cupiditate
              est voluptate placeat inventore. Rem repudiandae blanditiis quam
              aliquam illum, tempora alias suscipit eligendi veniam error facere
              id tempore quos dolorum obcaecati? Quae ex fuga tempore ut fugit
              temporibus beatae ab, quisquam excepturi sequi cumque unde quod
              perferendis laborum, error quaerat! Maxime blanditiis quibusdam
              distinctio, itaque, sint facere velit nisi vitae quia sed quod?
              Facere nemo nulla, voluptates atque laborum, assumenda adipisci,
              ipsum laudantium accusantium dignissimos recusandae iusto. Dolorum
              sint quos ab sit!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              possimus odio exercitationem natus voluptate numquam, ea non odit
              ducimus aliquam quos, est eos repudiandae tempore, blanditiis
              dolor officiis. Commodi, ipsa. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ex iste sunt aut cumque eius cum
              itaque officia dolore expedita mollitia, exercitationem eos
              nostrum odio? Eveniet, assumenda provident quam veritatis
              accusamus saepe, quasi sequi natus nam sed voluptatem harum velit
              voluptates autem at? Quis, culpa veritatis distinctio harum, ea
              blanditiis eos quam nemo rem molestias quaerat dolore corrupti
              vero dicta quia deserunt. Maiores voluptatem eveniet eos ipsum ab
              non. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Saepe molestiae ab ea quia, sint, mollitia asperiores itaque id
              molestias alias dolorum magni laudantium necessitatibus nam
              doloremque ratione debitis dolorem suscipit iure voluptatibus
              iusto non, voluptatum eum! Quaerat aspernatur cumque inventore
              soluta dignissimos veritatis blanditiis error, nesciunt obcaecati
              ullam pariatur itaque iste adipisci aut quo! Vitae nostrum ullam
              eum ea quod beatae quae sequi aspernatur. At perferendis incidunt
              temporibus distinctio ipsam ratione fugiat nam modi magni neque!
              Cum aut nemo voluptatum natus aperiam. Labore natus soluta, est
              ratione voluptatibus aperiam rerum inventore ipsam quod
              necessitatibus illum debitis odio sit rem harum ullam corporis
              eligendi repellat, suscipit unde impedit quis error maiores
              facere. Natus odit veritatis, quam cupiditate eum ipsum minus ex
              ut ducimus error repudiandae quisquam unde vero dolores id. Eos
              quia pariatur rerum, quaerat facilis, suscipit neque laboriosam
              tempora deleniti provident architecto distinctio vero cupiditate
              est voluptate placeat inventore. Rem repudiandae blanditiis quam
              aliquam illum, tempora alias suscipit eligendi veniam error facere
              id tempore quos dolorum obcaecati? Quae ex fuga tempore ut fugit
              temporibus beatae ab, quisquam excepturi sequi cumque unde quod
              perferendis laborum, error quaerat! Maxime blanditiis quibusdam
              distinctio, itaque, sint facere velit nisi vitae quia sed quod?
              Facere nemo nulla, voluptates atque laborum, assumenda adipisci,
              ipsum laudantium accusantium dignissimos recusandae iusto. Dolorum
              sint quos ab sit!
            </p>

          <div className="bg-secondary02 sticky top-0 w-full p-5">
            .Footer
          </div>
        </div>
      </div>

      <div className="bg-slate-800">Song name</div>
      <div className="bg-slate-500">Player controls</div>
    </div>
  );
}
