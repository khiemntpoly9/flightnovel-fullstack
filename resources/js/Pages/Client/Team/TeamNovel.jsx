import DefaultLayout from '@/Layouts/DefaultLayout';

const TeamNovel = ({ auth }) => {
	return (
		<DefaultLayout auth={auth}>
			<div className='w10/12 container mx-auto'>
				<div className='container mb-3 flex flex-col gap-3 md:flex-row'>
					{/* Info truyện */}
					<div className='mx-auto grid w-full rounded border-2 p-3 md:m-0 '>
						{/* Container 1 */}
						<div className='grid grid-cols-4 gap-3 border-b-2 pb-3'>
							<div className='col-span-4 sm:col-span-1'>
								<img
									src='https://m.media-amazon.com/images/M/MV5BNDNiOWM5NGItNzY4NC00MDg1LTljZjctYzViNmRlOTNhOWM2XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg'
									alt='thumb'
									className='rounded'
								/>
							</div>
							<div className='col-span-4 sm:col-span-3'>
								{/* name */}
								<span className='text-2xl font-semibold'>Kono Subarashii Sekai Ni Shukufuku o!</span>
								{/* category */}
								<div className='mt-2 flex gap-2'>
									<a className='rounded-full bg-slate-500 px-3 py-2 text-white hover:bg-slate-400' href='#'>
										Action
									</a>
									<a className='rounded-full bg-slate-500 px-3 py-2 text-white hover:bg-slate-400' href='#'>
										Action
									</a>
									<a className='rounded-full bg-slate-500 px-3 py-2 text-white hover:bg-slate-400' href='#'>
										Action
									</a>
									<a className='rounded-full bg-slate-500 px-3 py-2 text-white hover:bg-slate-400' href='#'>
										Action
									</a>
								</div>
								{/* author */}
								<div className='mt-2'>
									<p className='font-semibold'>
										Tác giả: {''}
										<a className='font-medium' href='#'>
											Akatsuki Natsume
										</a>
									</p>
								</div>
								{/* status */}
								<div className='mt-2'>
									<p className='font-semibold'>
										Tình trạng: {''}
										<span className='font-medium'>Đang tiến hành</span>
									</p>
								</div>

								{/* read */}
								<div className='mt-2 flex flex-row justify-center gap-2 md:justify-start'>
									<button className='rounded-full	bg-header-a p-2 text-white hover:bg-orange-400'>
										Thêm vol
									</button>
									<button className='rounded-full	bg-header-a p-2 text-white hover:bg-orange-400'>
										Chỉnh sửa chi tiết truyện
									</button>
								</div>
							</div>
						</div>
						{/* Container 2 -  */}
						<div className='grid grid-cols-4 border-b-2 py-3'>
							<div className='text-center'>
								Số lượt xem <br /> 13213
							</div>
							<div className='text-center'>
								Số lượt đánh giá <br /> 4.6/5
							</div>
							<div className='text-center'>
								Số lượt theo dõi <br /> 2589
							</div>
							<div className='text-center'>
								Số lượt bình luận <br /> 2589
							</div>
						</div>
						{/* Container 3 */}
						<div className='grid grid-cols-1 border-b-2 py-3'>
							<span>Tên khác: Konosuba</span>
						</div>
						<div className='grid grid-cols-1 py-3'>
							<span>Tóm tắt: Konosuba</span>
						</div>
					</div>
				</div>
				{/* End */}
				{/* Chương */}
				<div className='mb-3 w-full rounded border-2'>
					<div className='bg-header-a p-2'>
						<span className='rounded text-white'>Chương 16: .......</span>
						<button className='rounded-full	bg-header-a p-2 text-white hover:bg-orange-400'>Thêm chap</button>
						<button className='rounded-full	bg-header-a p-2 text-white hover:bg-orange-400'>Sửa chap</button>
					</div>
					<div className='flex gap-2 p-2'>
						<div className='flex w-full flex-col '>
							<div className='flex justify-between p-2 hover:bg-slate-300'>
								<div>Chương 1: ...........</div>
								<div>28/7/2023</div>
								<div>
									<button>chỉnh sửa</button>
								</div>
							</div>
							<div className='flex justify-between p-2 hover:bg-slate-300'>
								<div>Chương 2: ...........</div>
								<div>28/7/2023</div>
								<div>
									<button>chỉnh sửa</button>
								</div>
							</div>
							<div className='flex justify-between p-2 hover:bg-slate-300'>
								<div>Chương 3: ...........</div>
								<div>28/7/2023</div>
								<div>
									<button>chỉnh sửa</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			;
		</DefaultLayout>
	);
};

export default TeamNovel;
