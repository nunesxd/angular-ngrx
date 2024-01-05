import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { tap, withLatestFrom } from "rxjs";

import { decrement, increment } from "./counter.actions";
import { selectCount } from "./counter.selectors";

@Injectable()
export class CounterEffects {
    saveCount = createEffect(() => this.actions$.pipe(
        ofType(increment, decrement),
        withLatestFrom(this.store.select(selectCount)),
        tap(([action, counter]) => {
            console.log(action);
            localStorage.setItem('count', counter.toString());
        })
    ), 
    {dispatch: false});

    constructor(private actions$: Actions, private store: Store<{counter: number}>) {}
}