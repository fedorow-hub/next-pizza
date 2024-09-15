import { InfoBlock } from "@/components/shared";

export default function UnauthorizedPage() {
    return (
        <div className="flex flex-col items-center justify-center mt-40">
            <InfoBlock title="Доступ запрещен" text="Данную страницу могут просматриваеть только авторизованные пользователи" imageUrl="assets/images/lock.png"/>
        </div>
    )
}