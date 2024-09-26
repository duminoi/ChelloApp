## Cách dùng thư viện dnd kit

- import đủ thư viện và dùng đủ:
  - ở component chứa:  
     import { DndContext, closestCenter } from "@dnd-kit/core";
    import {
    arrayMove,
    horizontalListSortingStrategy,
    SortableContext,
    } from "@dnd-kit/sortable";
  - ở component được render:
    import { useSortable } from "@dnd-kit/sortable";
    import { CSS } from "@dnd-kit/utilities";
- cần component DndContext để chứa và component Sortable để sắp xếp, bọc các component con được render ra từ mảng

- với các component item con thì phải có đủ ref, style(mới dịch chuyển được), attributes và listener sau đó

- sau đó với componenent DndContext phải có hàm handleDragEnd để dịch chuyển vị trí của component sau khi drop
