import SearchIcon from "@/app/components/Icons/SearchIcon";

interface Props {
    headerTitle?: string;
    buttonTitle?: string;
    buttonOnClick?: () => void;
    onSearch?: () => void;
}

const AssetHeader = (props: Props) => {
    const {headerTitle = "Tài xế", buttonTitle = "Thêm tài xế", buttonOnClick, onSearch} = props;
    return (
        <div className={'flex flex-row items-center justify-between mt-16'}>
            <h1 className={'text-black font-bold text-[36px]'}>{headerTitle}</h1>
            <div className={'flex flex-row'}>
                <SearchIcon onClick={onSearch}/>
                <button onClick={buttonOnClick}
                        className={"w-[186px] h-[58px] ml-[20px] border-2 border-green text-primary text-[18px] rounded-full"}>{buttonTitle}
                </button>
            </div>
        </div>
    )
}

export default AssetHeader;
