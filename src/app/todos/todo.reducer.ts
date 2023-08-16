import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { borrar, crear, editar, limpiarTodos, toggle, toggleAll } from './todo.actions';

export const initialState: Todo[] = [
    new Todo('Vencer a Thanos'),
    new Todo('Salvar el mundo'),
    new Todo('Comprar el pan'),
];

export const todoReducer = createReducer(
    initialState,
    on(crear, (state, { texto }) => [...state, new Todo(texto)]),
    on(toggle, (state, { id }) => {
        return state.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completado: !todo.completado,
                };
            } else {
                return todo;
            }
        });
    }),
    on(editar, (state, { id, texto }) => {
        return state.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    texto: texto,
                };
            } else {
                return todo;
            }
        });
    }),
    on(borrar, (state, { id }) => state.filter((todo) => todo.id !== id)),
    on(toggleAll, (state, { completado }) => {
        return state.map((todo) => {
            return {
                ...todo,
                completado: completado,
            };
        });
    }),
    on(limpiarTodos, (state) => state.filter((todo) => !todo.completado))
);
