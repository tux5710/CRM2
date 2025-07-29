import { Calendar } from '@/components/ui/calendar';
import { NewSessionDialog } from '@/components/NewSessionDialog';

export default function CalendarPage() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Calendrier</h1>
        <NewSessionDialog />
      </div>
      <div className="rounded-md border">
        <Calendar mode="single" className="w-full" />
      </div>
    </div>
  );
}
