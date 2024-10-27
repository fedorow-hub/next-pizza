import { ProfileForm } from "@/components/shared/profile-form";
//import { User } from "../../../../models/user";
import { redirect } from "next/navigation";
import { User } from "../../../../api/api";

export default function ProfilePage() {
    //TODO страница изменения данных пользователя с кнопкой выхода из профиля
    //Получить информацию о пользователе из сессии

    /* if(!user){
        return redirect('/not-auth');
    } */

    const user: User = {
        id: 1,
        fullName: "Федоров",
        email: "s_fedorow"
    }
    
    return <ProfileForm data={user}/>
}