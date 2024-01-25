import React from 'react'
import Header from '../components/Home/Header'
import Image from 'next/image'
import Link from "next/link";
import Footer from '../components/Footer';
const privacyPage = () => {
  return (
    <div>
      <header className="py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="block items-left space-x-4">
          {/* Sử dụng Image component của Next.js nếu bạn có một file ảnh, hoặc thẻ img thông thường */}
          <Image className="items-center ml-10" src={require("../../../public/assets/logo/logo-app.png")} alt="" width={70} height={70} />
          <h1 className="font-bold text-xl text-[#2FA060]">Driver Manager</h1>
          
        </div>
        <div className="flex items-left justify-start text-left space-x-20 font-semibold mr-10 md:mr-30  lg:mr-64">   
          <button className="active:text-primary hover:text-primary focus:text-primary"><a href="./">Trang chủ</a></button>

          <button className="active:text-primary hover:text-primary focus:text-primary">
          
          <a href="/Privacy">Điều khoản</a>
          </button>
          <button className="active:text-primary hover:text-primary focus:text-primary"><a href="./#footer">Liên hệ</a></button>
        </div>  
        <Link href="/login" className="mr-10 bg-inherit text-primary font-semibold px-6 py-2 rounded-lg outline text-base hover:bg-green-400 transition-colors hover:text-white">
            Đăng nhập
        </Link>
      </div>
    </header>
      <div className=' mx-auto w-1/2 my-20 '>
        <div className='text-6xl text-center font-bold'>ĐIỀU KHOẢN SỬ DỤNG</div>
        <div className=' flex flex-col justify-stretch items-baseline text-left text-base'>
          <div className=' text-3xl mt-10 mb-4 leading-10 text-balance truncate font-semibold'>1. Phạm vi áp dụng</div>
          <div>Chính sách này quy định về cách thức mà DriveManager thu 
          thập, sử dụng, bảo mật thông tin áp dụng đối với các thông tin 
          được Người sử dụng cung cấp khi sử dụng Tài khoản 
          DriveManager qua Ứng Dụng DriveManager trên điện 
          thoại/website hoặc qua bên thứ ba sử dụng API của 
          DriveManager.
          </div>
        </div>
        <div className=' flex flex-col justify-stretch items-baseline text-left text-base'>
          <div className=' text-3xl mt-10 mb-4 leading-10 text-balance truncate font-semibold'>2. Mục đích thu thập thông tin:</div>
          <div>Người Sử Dụng đồng ý rằng DriveManager có quyền thu thập, 
          sử dụng, lưu trữ, tiết lộ và trao đổi các thông tin về Người Sử 
          Dụng, thông tin liên quan đến Người Sử Dụng và bất kỳ giao 
          dịch nào liên quan đến Người Sử Dụng thông qua Tài Khoản 
          DriveManager cho các mục đích sau:
          </div>
          <div className='text-2xl leading-10 mb-2 mt-2 text-balance truncate font-semibold'><b>2.1.</b> Hỗ trợ ứng dụng:</div>
          <div>DriveManager sử dụng thông tin 
          thu thập được để cung cấp.duy trì và cải thiện các tính năng 
          của DriveManager. Bao gồm:</div>
          <div className='mt-2'><b>2.1.1.</b> Tự động cập nhật các thông tin cá nhân (Họ tên, 
          Tên Doanh nghiệp, Email, SDT, Địa chỉ) của Người Sử Dụng 
          trong quá trình điền các trường thông tin trên ứng dụng.</div>
          <div className='mt-2'><b>2.1.2.</b> Ghi nhớ thông tin để Người Sử Dụng không phải 
          nhập lại trong quá trình truy cập hoặc lần tiếp theo khi Người 
          Sử Dụng truy cập.</div>
          <div className='mt-2'><b>2.1.3.</b> Tự động cập nhật Ứng dụng DriveManager trên 
          thiết bị của Người Sử Dụng, xử lý lỗi phần mềm, các sự cố hoạt 
          động, phân tích dữ liệu, kiểm nghiệm và nghiên cứu.</div>
          <div className='text-2xl leading-10 mb-2 mt-2 text-balance truncate font-semibold'><b>2.2.</b> An toàn và an ninh:</div>
          <div>DriveManager sử dụng dữ liệu thông tin của Người Sử 
          Dụng để duy trì sự an toàn, an ninh và tính toàn vẹn cho ứng 
          dụng DriveManager.</div>
          <div className='text-2xl leading-10 mb-2 mt-2 text-balance truncate font-semibold'><b>2.3.</b> Hỗ trợ khách hàng:</div>
          <div>Trong trường hợp Người Sử 
          Dụng liên lạc với Bộ phận hỗ trợ khách hàng của DriveManager
          và sau khi có sự đồng ý của Người Sử Dụng, DriveManager sử 
          dụng thông tin thu thập được bao gồm cả bản ghi âm các cuộc 
          gọi hỗ trợ, chăm sóc khách hàng để:</div>
          <div className='mt-2'><b>2.3.1.</b> Giải quyết các thắc mắc, khiếu nại của Người Sử 
          Dụng.</div>
          <div className='mt-2'><b>2.3.2.</b> Theo dõi và hỗ trợ khách hàng trong quá trình sử 
          dụng dịch vụ.</div>
          <div className='text-2xl leading-10 mb-2 mt-2 text-balance truncate font-semibold'><b>2.4.</b> Nghiên cứu và phát triển: </div>
          <div className='mt-2'>DriveManager có thể sử 
          dụng thông tin thu thập được để phục vụ công tác nghiên cứu, 
          khảo sát nhằm mục đích: (i) cải thiện và khắc phục hạn chế 
          trong quá trình sử dụng ứng dụng; (ii) phát triển các tính năng 
          mới;</div>
          <div className='text-2xl leading-10 mb-2 mt-2 text-balance truncate font-semibold'><b>2.5.</b> Trao đổi từ DriveManager:</div>
          <div className='mt-2'>DriveManager có thể sử 
          dụng thông tin thu thập được để quảng bá với Người Sử Dụng 
          về các chương trình khuyến mại, nghiên cứu, khảo sát, tin tức, 
          thông tin cập nhật, các sự kiện, các quảng cáo và nội dung có 
          liên quan về ứng dụng DriveManager. Các kênh liên lạc mà 
          DriveManager sẽ sử dụng để giao tiếp với Người Sử Dụng bao 
          gồm:</div>
          <div className='mt-2'><b>2.5.1.</b> Gửi tin nhắn (SMS) hoặc gọi điện đến số điện thoại 
          của Người Sử Dụng theo thông tin DriveManager thu thập được
          từ Người Sử Dụng;</div>
          <div className='mt-2'><b>2.5.2.</b> Gửi thư điện tử đến địa chỉ thư điện tử của Người 
          Sử Dụng theo thông tin DriveManager thu thập được từ Người 
          Sử Dụng;</div>
          <div className='text-2xl leading-10 mb-2 mt-2 text-balance truncate font-semibold'><b>2.6.</b> Thực hiện các thủ tục và yêu cầu pháp lý 
          DriveManager có thể sử dụng thông tin thu thập được để</div>
          <div className='mt-2'><b>2.6.1.</b> Điều tra hoặc giải quyết các khiếu nại hoặc tranh 
          chấp liên quan đến việc sử dụng ứng dụng DriveManager từ 
          Người Sử Dụng;</div>
          <div className='mt-2'><b>2.6.2.</b> Thực hiện các hoạt động khác được pháp luật hiện 
          hành cho phép;</div>
          <div className='mt-2'><b>2.6.3.</b> Cung cấp cho các cơ quan nhà nước có thẩm quyền
          hoặc cung cấp thông tin theo yêu cầu của pháp luật.</div>
        </div>
        <div className=' flex flex-col justify-stretch items-baseline text-left text-base'>
          <div className=' text-3xl mt-10 mb-4 leading-10 text-balance truncate font-semibold'>3. Các thông tin khách hàng được thu thập</div>
          <div>DriveManager sẽ thu thập các loại thông tin sau đây:
          </div>
          <div className='text-2xl leading-10 mb-2 mt-2 text-balance truncate font-semibold'><b>3.1.</b> Thông tin khi Người Sử Dụng mở Tài Khoản 
          DriveManager</div>
          <ul className='list-disc'>
            <li className='ml-10'>Email đăng ký</li>
            <li className='ml-10'>Tên doanh nghiệp</li>
            <li className='ml-10'>Mã số doanh nghiệp và MST (nếu tổ chức có MST khác mã số doanh nghiệp)</li>
            <li className='ml-10'>Địa chỉ doanh nghiệp</li>
            <li className='ml-10'>Email liên hệ</li>
            <li className='ml-10'>Số điện thoại thông tin về người đại diện hợp pháp của tổ chức{' '}</li>
          </ul>
          <div className='text-2xl leading-10 mb-2 mt-2 text-balance truncate font-semibold'><b>3.2.</b> Thông tin được DriveManager gửi cho Người Sử
          Dụng</div>
          <div className='mt-2'><b>3.2.1.</b> Liên hệ với DriveManager qua tổng đài, ứng dụng, 
          trang web và tài khoản mạng xã hội;</div>
          <div className='mt-2'><b>3.2.2.</b> Kích hoạt các tính năng cho phép DriveManager 
          truy cập vào ảnh hoặc vị trí thiết bị của Người Sử Dụng.</div>
          <div className='text-2xl leading-10 mb-2 mt-2 text-balance truncate font-semibold'><b>3.3.</b> Thông tin được tạo ra khi Người Sử Dụng dùng 
          ứng dụng DriveManager</div>
          <div className='mt-2'><b>3.3.1.</b> Cập nhật thông tin Tài Khoản DriveManager.</div>
          <div className='mt-2'><b>3.3.2.</b> Nếu được Người Sử Dụng cho phép, DriveManager 
          sẽ thu thập thông tin vị trí của thiết bị truy cập của Người Sử 
          Dụng; DriveManager sẽ thu thập thông tin vị trí chính xác hoặc
          tương đối của Người Sử Dụng thông qua dữ liệu như GPS, địa 
          chỉ IP và WiFi. Khi Người Sử Dụng điền địa chỉ doanh nghiệp sẽ 
          tự động hiển thị vị trí của Người Sử Dụng trên bản đồ;</div>
          <div className='mt-2'><b>3.3.3.</b> Thông tin sử dụng và tùy chọn: DriveManager thu 
          thập thông tin về cách Người Sử Dụng tương tác với ứng dụng 
          của DriveManager, các tùy chọn và thiết lập được chọn. Trong 
          một số trường hợp DriveManager thu thập thông tin thông qua 
          việc sử dụng các cookie, thẻ điểm ảnh và các công nghệ tương 
          tự cho phép tạo và duy trì các mã nhận diện duy nhất của 
          Người Sử Dụng;</div>
          <div className='mt-2'><b>3.3.4.</b> Thông tin sử dụng và tùy chọn: DriveManager thu 
          thập thông tin về cách Người Sử Dụng tương tác với ứng dụng 
          của DriveManager, các tùy chọn và thiết lập được chọn. Trong 
          một số trường hợp DriveManager thu thập thông tin thông qua 
          việc sử dụng các cookie, thẻ điểm ảnh và các công nghệ tương 
          tự cho phép tạo và duy trì các mã nhận diện duy nhất của 
          Người Sử Dụng;</div>
          <div className='mt-2'><b>3.3.5.</b> Thông tin thiết bị: DriveManager có thể thu thập 
          thông tin về thiết bị Người Sử Dụng sử dụng để truy cập Ứng 
          dụng DriveManager, bao gồm model phần cứng, hệ điều hành 
          và phiên bản, phần mềm, tên tập tin và phiên bản, ngôn ngữ 
          ưu tiên, mã nhận diện thiết bị duy nhất, mã nhận diện quảng 
          cáo, số seri và thông tin mạng di động;</div>
          <div className='mt-2'><b>3.3.6.</b> Thông tin lịch sử cập nhật: Khi Người Sử Dụng 
          tương tác với ứng dụng DriveManager, DriveManager thu thập 
          nhật ký máy chủ, có thể bao gồm các thông tin như thời gian, 
          hành động, tài khoản thực hiện,...</div>
          <div className='text-2xl leading-10 mb-2 mt-2 text-balance truncate font-semibold'>3.4 Các thông tin khác DriveManager cần thu thập 
          nhằm tuân thủ nghĩa vụ pháp lý</div>
          <div className='mt-2'>DriveManager sẽ yêu cầu Người Sử Dụng cung cấp các 
          thông tin liên quan đến việc sử dụng ứng dụng của 
          DriveManager mà DriveManager có thể yêu cầu một cách hợp 
          lý cho các mục đích sau đây:</div>
          <div className='mt-2'><b>3.4.1.</b> Trợ giúp DriveManager tuân thủ các nghĩa vụ của 
          mình theo quy định pháp luật;</div>
          <div className='mt-2'><b>3.4.2.</b> Báo cáo các cơ quan nhà nước có thẩm quyền theo
          quy định;</div>
          <div className='mt-2'><b>3.4.3.</b> Đánh giá việc Người Sử Dụng đã tuân thủ, đang 
          tuân thủ và có thể tiếp tục tuân thủ tất cả các nghĩa vụ của 
          mình theo Chính Sách của DriveManager hay không.</div>
        </div>
        <div className=' flex flex-col justify-stretch items-baseline text-left text-base'>
          <div className=' text-3xl mt-10 mb-4 leading-10 text-balance truncate font-semibold'>4. Phạm vi sử dụng thông tin</div>
          <div className='mt-2'><b>4.1.</b> Ngoài các mục đích được nêu trong Chính Sách này, 
          DriveManager cam kết không chuyển nhượng, cho thuê, tiết lộ,
          chia sẻ thông tin của Người Sử Dụng cho bất kỳ bên thứ ba mà 
          không có sự chấp thuận của Người Sử Dụng hoặc theo đúng 
          quy định pháp luật hoặc theo yêu cầu của các cơ quan nhà 
          nước có thẩm quyền.
          </div>
          <div className='text-2xl leading-10 mb-2 mt-2 text-balance truncate font-semibold'>4.2. Mục đích chia sẻ và tiết lộ thông tin</div>
          <div className='mt-2'><b>4.2.1.</b> Theo yêu cầu của Người Sử Dụng, bao gồm:</div>
          <ul>
          <li className='mt-2 ml-10'>- Chia sẻ thông tin của Người Sử Dụng với bên thứ ba là 
          các đối tác, doanh nghiệp hợp tác theo yêu cầu của Người Sử 
          Dụng;</li>
          <li className='mt-2 ml-10'>- Cho mục đích tại Điều khoản này, các bên thứ ba có thể 
          là: (i) các ứng dụng hoặc trang web khác tích hợp API của 
          DriveManager; (iii) hoặc các đối tác doanh nghiệp của 
          DriveManager.</li>
          <li className='mt-2 ml-10'>- Trong trường hợp DriveManager chia sẻ thông tin với 
          các bên thứ ba, để đảm bảo việc bảo mật thông tin của Người 
          Sử Dụng, giữa DriveManager và các bên thứ ba sẽ quy định rõ 
          ràng và nghiệm ngặt các yêu cầu đối với việc các bên thứ ba 
          phải có nghĩa bảo mật các thông tin của Người Sử Dụng dựa 
          trên các điều khoản và điều kiện mà DriveManager đã cam kết 
          với Người Sử Dụng theo quy định của Chính Sách này.</li>
          </ul>
          <div className='mt-2'><b>4.2.2.</b> Với công chúng khi Người Sử Dụng gửi nội dung lên
          diễn đàn công cộng do DriveManager lập, bao gồm: Các thông 
          tin được Người Sử Dụng đăng tải trên các diễn đàn công cộng 
          như fanpage của DriveManager, VBC trên Facebook hoặc các 
          mạng xã hội khác.</div>
          <div className='mt-2'><b>4..2.3.</b> Theo quy định của pháp luật hiện hành hoặc theo 
          yêu cầu của cơ quan nhà nước có thẩm quyền, bao gồm:</div>
          <div className='mt-2'>- Chia sẻ cho các cơ quan tiến hành tố tụng, các cơ quan 
          quản lý hành chính;</div>
          <div className='mt-2'>- Thực hiện các báo cáo định kỳ, đột xuất theo quy định 
          của các cơ quan quản lý nhà nước khác;</div>
          <div className='mt-2'>- DriveManager cũng có thể truy cập, bảo vệ và chia sẻ 
          thông tin khi DriveManager có cơ sở phát hiện, ngăn chặn và 
          giải quyết gian lận và hoạt động phi pháp khác.</div>
          <div className='mt-2'><b>4..2.4.</b> Có sự đồng ý của Người Sử Dụng.</div>
        </div>
        <div className=' flex flex-col justify-stretch items-baseline text-left text-base'>
          <div className=' text-3xl mt-10 mb-4 leading-10 text-balance truncate font-semibold'>5. Quyền tiếp cận, chỉnh sửa thông tin của người sử 
          dụng</div>
          <div className='mt-2'><b>5.1.</b> Người Sử Dụng có quyền yêu cầu DriveManager thực
          hiện việc kiểm tra, cập nhật, điều chỉnh hợp hủy bỏ thông tin 
          của Người Sử Dụng. DriveManager có nghĩa vụ kiểm tra, cập 
          nhật, điều chỉnh, hủy bỏ thông tin của Người Sử Dụng khi có 
          yêu cầu hoặc cung cấp các công cụ để Người Sử Dụng tự kiểm 
          tra, cập nhật, điều chỉnh thông tin của Người Sử Dụng.
          </div>
          <div className='mt-2'><b>5.2.</b> Dừng nhận bản tin tiếp thị trên email: Người Sử 
          Dụng có thể chọn dừng nhận email tiếp thị từ DriveManager 
          bằng cách liên hệ trực tiếp với DriveManager thông qua bất cứ 
          thông tin liên hệ nào trên website, ứng dụng hay mạng xã hội 
          của DriveManager.   
          </div>
          <div className='mt-2'><b>5.3.</b> Dừng nhận thông báo của ứng dụng DriveManager 
          từ các quyền trong thiết bị truy cập bằng cách tùy chỉnh các 
          quyền trong thiết bị truy cập theo quy định của các nền tảng di
          động (iOS, Android, v.v.).  
          </div>
        </div>
        <div className=' flex flex-col justify-stretch items-baseline text-left text-base'>
          <div className=' text-3xl mt-10 mb-4 leading-10 text-balance truncate font-semibold'>6. Các biện pháp bảo đảm an toàn bảo mật thông tin 
          </div>
          <div className='mt-2'><b>6.1.</b> DriveManager cam kết và sử dụng các phương pháp 
          hợp lý để đảm bảo an toàn, an ninh cho thông tin cá nhân được
          thu thập để ngăn ngừa các hành vi đánh cắp, tiếp cận, thay 
          đổi, phá hủy thông tin trái phép.
          </div>
          <div className='mt-2'><b>6.2.</b> DriveManager sẽ thực hiện các biện pháp an ninh 
          khác nhau để bảo đảm tính an toàn các dữ liệu của Người Sử 
          Dụng trên hệ thống. Dữ liệu của Người Sử Dụng được lưu trữ 
          trong hệ thống mạng an toàn và chỉ có thể được truy cập bởi 
          một số lượng nhân viên hạn chế của DriveManager.   
          </div>
          <div className='mt-2'><b>6.3.</b> DriveManager sẽ lưu giữ dữ liệu thông tin của Người 
          Sử Dụng phù hợp với quy định của pháp luật hiện hành. 
          DriveManager sẽ hủy ngay khi đã hợp lý xác nhận rằng: (i) mục
          đích mà dữ liệu thông tin đã được thu thập không còn phù hợp 
          cho việc giữ lại các dữ liệu; hoặc (ii) việc giữ lại không còn cần 
          thiết cho bất cứ mục đích pháp lý hoặc kinh doanh nào; hoặc 
          (iii) Người Sử Dụng không có nhu cầu hay đã hoàn thành việc 
          sử dụng Tài Khoản DriveManager. 
          </div>
        </div>
        <div className=' flex flex-col justify-stretch items-baseline text-left text-base'>
          <div className=' text-3xl mt-10 mb-4 leading-10 text-balance truncate font-semibold'>7. Các quy định khác 
          </div>
          <div className='mt-2'><b>7.1.</b> Việc DriveManager không thực hiện hoặc áp dụng 
          bất kỳ quyền hoặc biện pháp nào mà DriveManager có theo 
          quy định tại Chính Sách này hoặc theo quy định pháp luật 
          không bị xem là DriveManager từ bỏ hoặc hạn chế quyền hoặc 
          biện pháp đó.
          </div>
          <div className='mt-2'><b>7.2.</b> Trong trường hợp bất kỳ quy định nào của Chính 
          Sách này được xác định là bất hợp pháp hoặc không thể thực 
          thi bằng cách khác thì DriveManager sửa đổi quy định đó, hoặc
          chủ động bỏ quy định đó ra khỏi Chính Sách này. Điều này sẽ 
          không ảnh hưởng đến các quy định còn lại của Chính Sách này,
          và những quy định còn lại sẽ vẫn có đầy đủ hiệu lực.  
          </div>
          <div className='mt-2'><b>7.3.</b>Người Sử Dụng xác nhận rằng DriveManager, theo 
          các quy định pháp luật và quy định hiện hành hoặc sau khi nhận được 
          chỉ thị của các cơ quan hữu quan chính phủ, có thể được yêu 
          cầu thực hiện các hành động mà có thể vi phạm các quy định 
          của những Chính Sách này. Về vấn đề này, Người Sử Dụng 
          đồng ý không buộc DriveManager phải chịu trách nhiệm.
          </div>
          <div className='mt-2'><b>7.4.</b>Chính Sách này sẽ có giá trị ràng buộc đối với những
          người thừa kế, các đại diện cá nhân và đại diện theo pháp luật,
          các bên kế nhiệm quyền sở hữu và các bên nhận chuyển 
          nhượng được phép về tài sản (nếu có) của Người Sử Dụng.
          </div>
          <div className='mt-2'><b>7.5.</b>Bất kỳ tranh chấp hoặc bất đồng nào theo Chính 
          Sách này trước hết sẽ được giải quyết thông qua thương lượng 
          hòa giải. Nếu không đạt được thỏa thuận thông qua thương 
          lượng hòa giải như vậy, các bên tại đây đồng ý sẽ đưa tranh 
          chấp hoặc bất đồng lên tòa án cấp có thẩm quyền tại Thành 
          Phố Hồ Chí Minh để giải quyết.
          </div>
          <div className='mt-2'><b>7.6.</b>Tranh chấp giữa Người Sử Dụng và bên thứ ba: 
          DriveManager không có bất cứ trách nhiệm liên quan nào mà 
          chỉ đóng vai trò hỗ trợ Người Sử Dụng, cung cấp thông tin cần
          thiết để Người Sử Dụng và bên thứ ba liên quan để cùng giải 
          quyết. Người Sử Dụng và bên thứ ba phải trực tiếp giải quyết 
          mọi vấn đề liên quan đến giao dịch của Người Sử Dụng và bên 
          thứ ba. Trong trường hợp có khiếu nại, tranh chấp,... 
          DriveManager có toàn quyền khoá Tài Khoản DriveManager có 
          liên quan cho đến khi vấn đề được giải quyết hoặc có quyết 
          định cuối cùng của cơ quan nhà nước có thẩm quyền.
          </div>
        </div>
        <div className='text-primary mt-20 flex flex-col justify-stretch items-baseline text-left text-lg'>
        Người Sử Dụng DriveManager phải đọc, hiểu đầy đủ và đồng ý 
        hoàn toàn với các nội dung của Chính Sách này.
        </div>
    </div>
    <Footer/>
    </div>

  )
}

export default privacyPage