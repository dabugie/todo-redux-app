import { createAction, props } from '@ngrx/store';


export const crear = createAction(
    '[TODO] Creat todo',
    props<{ texto: string }>()
);

export const toggle = createAction(
    '[TODO] Toggle todo',
    props<{ id: number }>()
);

export const editar = createAction(
    '[TODO] Edit todo',
    props<{ id: number, texto: string }>()
);

export const borrar = createAction(
    '[TODO] Delete todo',
    props<{ id: number }>()
);

export const toggleAll = createAction(
    '[TODO] ToggleAll todo',
    props<{ completado: boolean }>()
);

export const limpiarTodos = createAction(
    '[TODO] ClearAll todo'
);