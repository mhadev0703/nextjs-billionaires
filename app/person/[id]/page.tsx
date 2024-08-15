import { API_URL } from "../../config"
import Profile from "../../components/billionaire-profile";
import Assets from "../../components/billionaire-assets";
import "../../styles/global.css";

export const metadata = {
  title: "Profile",
};

async function getBillionaireDetail(id: string) {
  const response = await fetch(`${API_URL}/person/${id}`);
  const data = await response.json();

  return {
    profile: {
      name: data.name,
      netWorth: data.netWorth,
      country: data.country,
      industries: data.industries,
      bio: data.bio,
      squareImage: data.squareImage,
    },
    financialAssets: data.financialAssets,
  };
}

export default async function ProfilePage({ params }: { params: { id: string } }) {
  const { profile, financialAssets } = await getBillionaireDetail(params.id);

  return (
    <div>
      <Profile {...profile} />
      <Assets assets={financialAssets} />
    </div>
  );
}