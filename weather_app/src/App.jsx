import "./App.css";

function App() {
	return (
		<>
			<div className='flex flex-col md:flex-row items-center '>
        <div className='md:w-2/6 md:h-screen w-full h-[40vh]'>
          Left
        </div>
				<div className='md:w-4/6 md:h-screen w-full bg-slate-100'>Right</div>
			</div>
		</>
	);
}

export default App;
