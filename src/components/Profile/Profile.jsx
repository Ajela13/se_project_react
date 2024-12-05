import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  handleCardClick,
  clothingItems,
  handleAddClick,
  handleUpdateProfileClick,
  onCardLike,
  handleSignOut,
  isLoggedIn,
}) {
  return (
    <div className="profile">
      <SideBar
        handleUpdateProfileClick={handleUpdateProfileClick}
        handleSignOut={handleSignOut}
      />
      <ClothesSection
        handleCardClick={handleCardClick}
        handleAddClick={handleAddClick}
        clothingItems={clothingItems}
        onCardLike={onCardLike}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
}

export default Profile;
