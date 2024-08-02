import { ApproveButton } from '@/components/buttons/approve-button';
import { FavoriteButton } from '@/components/buttons/favorite-button';
import { TagButton } from '@/components/buttons/tag-button';
import { RejectButton } from '@/components/buttons/reject-button';

const MainPage = () => {

  return (
    <div className="">
      <div className="flex flex-col gap-2 w-[148px]">
        <ApproveButton />
        <RejectButton />
        <FavoriteButton />
        <TagButton/>
      </div>
    </div>
  );
};

export default MainPage;
