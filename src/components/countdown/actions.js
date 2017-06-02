export const countdownActions = dispatcher =>
    ({
        tick() {
            dispatcher.handleAction({ type: 'TICK' })
        },
        reset(count) {
            dispatcher.handleAction({
                type: 'RESET',
                count
            })
        }
    })