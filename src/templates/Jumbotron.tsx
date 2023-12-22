import brid from '@assets/images/brid.png';

export default function Jumbotron() {
  return (
    <div className="jumbotron jumbotron__wedding min-h-screen bg-gray-200 flex-col flex items-center justify-between py-10">
      <img src={brid.src}  className="absolute left-0 w-30 h-30 top-60" />
      <div className="jumbotron__headline z-10">
        <p className="font-high-emphasis text-yellow-100 text-xl drop-shadow-sm">The Wedding Of</p>
        <div className="about mt-5">
          <h1 className="woman font-high-emphasis text-yellow-500  font-bold text-8xl drop-shadow-sm">Mutia</h1>
          <span className="font-high-emphasis text-xl text-right text-yellow-100 block mr-10 -m-5 drop-shadow-sm">and</span>
          <h1 className="man font-high-emphasis text-yellow-500 -m-5 font-bold text-8xl text-right ml-10 drop-shadow-sm">Azman</h1>          
        </div>
      </div>

      <CountdownWrapper/>
    </div>
  );
}



interface CountdownWrapperProps  {  
  readonly endAt?: Date
  onEnded?(): void;
}

interface CountdownNumberProps {
  readonly value: number
  readonly labelText: string
}

function CountdownWrapper() {  
  return (
    <div className="desc flex justify-center items-center flex-col z-10">
      <h3 className="text-2xl text-indigo-900 font-bold font-darumadrop">Acara Akan Berlangsung</h3>
      <p className="text-lg text-center mt-5 text-indigo-950 font-low-emphasis font-light">
        Kamu dapat hadir secara virtual melalui siaran<br/>langsung juga loh <a href="#" className="font-semibold font-darumadrop indicator-live"> instagram @muty.muty.muty</a>
      </p>
      <Countdown className="mt-5"/>
    </div>
  )
}


function Countdown(props: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
  return (    
    <div className={"countdown flex flex-row " + props?.className}>
      <CountdownNumber value={2} labelText="Hari" />
      <CountdownNumber value={10} labelText="Jam" />
      <CountdownNumber value={4} labelText="Menit" />
      <CountdownNumber value={10} labelText="Detik" />
    </div>
  );
}


function CountdownNumber({value, labelText}: CountdownNumberProps) {
  return (
    <div className="countdown__number flex flex-col justify-center items-center">
      <div className="countdown__number_box bg-yellow-500 rounded-md m-3 w-16 h-16 flex justify-center items-center">
        <p className="text-white text-2xl font-semibold font-low-emphasis">{value}</p>
      </div>    
      <p className="text-gray-800 font-low-emphasis font-bold">{labelText}</p>
    </div>
  )
}