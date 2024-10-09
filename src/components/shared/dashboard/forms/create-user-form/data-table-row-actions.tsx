import { Button } from "@/components/ui";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Row } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

interface DatatableRowActionsProps<TData> {
    row: Row<TData>;
    onEdit: (value: TData) => void;
    onDelete: (value: TData) => void;
}


const DatatableRowActions = <TData,>({row, onEdit, onDelete} : DatatableRowActionsProps<TData>) => {
    return(
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 data-[state=open]:bg-muted">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent  align="end">
            <DropdownMenuItem className="text-primary-foreground cursor-pointer rounded-t-lg p-3 outline-none border-b-[1px] bg-primary hover:bg-primary/90"
              onClick={()=> onEdit(row.original)}
            >
              Редактировать
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-primary-foreground cursor-pointer rounded-b-lg p-3 outline-none border-b-[1px] bg-primary hover:bg-primary/90"
              onClick={()=> onDelete(row.original)}
            >
              Удалить
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DatatableRowActions;