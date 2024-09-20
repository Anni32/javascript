/**
 * @param {string|number} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(eq) {
            if (eq === val) {
                return true
                }
            else{
                throw new Error('Not Equal')}
        },
        notToBe: function(eq){
            if (eq !== val){
                return true}
            else{
                throw new Error('Equal')
            }
            }
        }
}
