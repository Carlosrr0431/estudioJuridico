import Image from 'next/image';
import { useState } from 'react';
import Cancel from '../public/cancel.svg'
// import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
// import Calendar from '@hassanmojab/react-modern-calendar-datepicker';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


export const CalendarComponent = ({ setShowModal }) => {
    const [selectedDays, setSelectedDays] = useState();

    return (


        <div className={`fixed inset-0  z-50 
             flex items-center justify-center h-full w-full  bg-opacity-100  backdrop-blur-sm
            
             `}>
            <div className="rounded-[10px]  shadow-2xl bg-black/70 shadow-black/20 p-8 m-4 md:max-w-[900px] md:mx-auto">
                <div className="flex">
                    <h1 className=" w-full text-center text-white mb-6">Programar Consulta</h1>
                    <div className="" onClick={() => setShowModal(false)}>
                        <button className="cursor-pointer">
                            <Image src={Cancel} height={40} width={40} alt="" className="hover:scale-110" />
                        </button>
                    </div>
                </div>
                <Calendar
                    value={selectedDays}
                    onChange={setSelectedDays}
                    className="text-black"
                // shouldHighlightWeekends
                // locale={myCustomLocale}




                />

                {JSON.stringify(selectedDays)}
            </div>
        </div>
    );
}


