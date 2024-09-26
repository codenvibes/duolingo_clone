import Image from "next/image";
import { redirect } from "next/navigation";

import { getUserProgress } from "@/db/queries";
import { FeedWrapper } from "@/components/feedwrapper";
import { UserProgress } from "@/components/userprogress";
import { StickyWrapper } from "@/components/stickywrapper";

const ShopPage = async () => {
  const userProgressData = getUserProgress();

  const [
    userProgress
  ] = await Promise.all([
    userProgressData,
  ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image
            src="assets/icons/shop.svg"
            alt="Shop"
            height={90}
            width={90}
          />
          <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
            Shop
          </h1>
          <p className="text-muted-foreground">
            Spend your points on cool stuff.
          </p>
        </div>
      </FeedWrapper>
    </div>
  );
};

export default ShopPage;