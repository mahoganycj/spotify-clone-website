import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ICategory } from "../../libs/data2";




const CategoryCard = ({ name, image, id }: ICategory) => {


  return (
    <Link href={`/genre/${id}`}>
      <div className="relative cursor-pointer">
        <Image
          src={image}
          height={300}
          width={ 300}
          className="rounded-xl"
          alt="Category 1"
        />
        <p className="text-base md:text-xl text-white font-semibold absolute top-4 left-4 w-16">
          {name}
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;