import { ProfileForm } from "@/components/shared/profile-form";
import { User } from "../../../../models/user";
import { redirect } from "next/navigation";

export default function ProfilePage() {
    //TODO страница изменения данных пользователя с кнопкой выхода из профиля
    if(!user){
        return redirect('/not-auth');
    }
    
    return <ProfileForm data={user}/>
}