import React from "react";
import { formateDate } from "@/lib/utils";
import { Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const StartUpCard = ({ post }) => {
  const {
    _createdAt,
    author: { _id: autherId, name },
    views,
    title,
    category,
    description,
    image,
    _id,
  } = post;
  return (
    <li className="startup-card group">
      <div className="flex-between ">
        <p>{formateDate(_createdAt)}</p>
        <div className=" flex gap-2">
          <Eye className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${autherId}`}>
            <p className="text-16-medium line-clamp-1">{name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${autherId}`}>
          <Image
            src="https://placehold.co/48x48"
            alt="placeholder"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>
      <Link href={`/startup/${_id}`}>
        <p className="startup-card_description">{description}</p>
        <img src={image} alt={description} className="startup-card_img" />
      </Link>
      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Link href={`/startup/${_id}`}>
          <button className="startup-card_btn" asChild>
            <Link href={`/startup/${_id}`}>Detail</Link>
          </button>
        </Link>
      </div>
    </li>
  );
};
export default StartUpCard;
