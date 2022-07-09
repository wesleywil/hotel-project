from residences.models import Room
from datetime import date

def validate_date(bks):
    if bks.end_booking < date.today():
        print('VALIDATION CLOSED')
        bks.open = False
        room = Room.objects.get(id = bks.room.id)
        room.vacancy = True
        print(f'ROOM ==> {room}')
        bks.save()
        room.save()
       
    else:
        print(f'END_BOOKING ==> {bks.end_booking}')
        print('Not ended yet!')
