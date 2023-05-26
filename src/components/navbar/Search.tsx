'use client'
type Props = {}

const Search = (props: Props) => {
	return (
		<div className='border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>
			<div className='flex flex-row items-center justify-between'>
				<div className='text-sm font-semibold px-6'>AnyWhere</div>
				<div className='hidden sm:block text-sm font-semibold px-6 flex-1 text-center border-x-[1px]'>
					Any Week
				</div>
			</div>
		</div>
	)
}

export default Search
