import ProductList from '../ProductList';
import RecentOrders from '../RecentOrders';
import WelcomeBanner from '../../components/WelcomeBanner';
import SingleStatCard from '../../components/Common/SingleStatCard';
import StatsCard from '../../components/StatsCard';

import { FaBox } from "react-icons/fa";
import { IoPieChart } from "react-icons/io5";
import { FaUniversity } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";

const statsData = [
    {
      title: "New Orders",
      value: "1,390",
      icon: <FaBox />,
      color: "#3b82f6",
    },
    {
      title: "Sales",
      value: "$57,890",
      icon: <IoPieChart />,
      color: "#10b981",
    },
    {
      title: "Revenue",
      value: "$12,390",
      icon: <FaUniversity />,
      color: "#8b5cf6",
    },
    {
      title: "Total Products",
      value: "1,390",
      icon: <FaProductHunt />,
      color: "#6366f1",
    },
  ];

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen ">
    <WelcomeBanner/>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        
        {statsData.map((item, index) => (
          <SingleStatCard
            key={index}
            title={item.title}
            value={item.value}
            icon={item.icon}
            color={item.color}
          />
        ))}

      </div>

    <ProductList/>
    <RecentOrders/>
    <StatsCard/>
    </div>
  )
}

export default Dashboard;