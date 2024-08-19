import Image from "next/image";
const MemberCard = ({ member }) => {
  const { memberName, memberRole, memberBio, memberLinkUrl, memberImage } =
    member;
  console.log(member);
  return (
    <article className="">
      <div className=" mb-4">
        <Image
          src={memberImage.asset.url}
          width={300}
          height={300}
          alt={memberImage.alt}
          className="w-[100%] h-auto"
        />
      </div>
      <div>
        <h3 className="text-xl font-medium text-custom-primary">
          {memberName}
        </h3>
        <p className="">{memberRole}</p>
      </div>
    </article>
  );
};

export default MemberCard;
