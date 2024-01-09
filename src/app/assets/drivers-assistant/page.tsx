import AssetHeader from "@/app/components/AssetHeader";
import DriverItem from "@/app/components/List/Driver/DriverItem";

const DriversAssistantPage = () => {
    return (
        <div className={'mx-12'}>
            <AssetHeader/>
            <div className={'mt-[50px] lg:grid-cols-2 grid gap-[25px] sm:grid-cols-1'}>
                <DriverItem id={driverItem.id} image={driverItem.image} userName={driverItem.userName}
                            fullName={driverItem.fullName} phoneNumber={driverItem.phoneNumber}
                            salary={driverItem.salary}/>
                <DriverItem id={driverItem.id} image={driverItem.image} userName={driverItem.userName}
                            fullName={driverItem.fullName} phoneNumber={driverItem.phoneNumber}
                            salary={driverItem.salary}/>
                <DriverItem id={driverItem.id} image={driverItem.image} userName={driverItem.userName}
                            fullName={driverItem.fullName} phoneNumber={driverItem.phoneNumber}
                            salary={driverItem.salary}/>
                <DriverItem id={driverItem.id} image={driverItem.image} userName={driverItem.userName}
                            fullName={driverItem.fullName} phoneNumber={driverItem.phoneNumber}
                            salary={driverItem.salary}/>
                <DriverItem id={driverItem.id} image={driverItem.image} userName={driverItem.userName}
                            fullName={driverItem.fullName} phoneNumber={driverItem.phoneNumber}
                            salary={driverItem.salary}/>
                <DriverItem id={driverItem.id} image={driverItem.image} userName={driverItem.userName}
                            fullName={driverItem.fullName} phoneNumber={driverItem.phoneNumber}
                            salary={driverItem.salary}/>
            </div>
        </div>
    )
}
export default DriversAssistantPage;
const drivers = [
    {
        id: 1,
        image: 'https://picsum.photos/60/60',
        userName: 'Vinhnguyen24',
        fullName: 'Vinh Nguyen',
        phoneNumber: '0938791640',
        salary: 34000,
    }
]
const driverItem = drivers[0];

