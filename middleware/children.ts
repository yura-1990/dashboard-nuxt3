import { useAuthStore } from "~/store/useAuthStore";
import { storeToRefs } from 'pinia'
import type {RouteRecordName} from "vue-router";

const {  permissions } = storeToRefs(useAuthStore());
function findPermissionContainingBrowse(str: RouteRecordName | null | undefined) {
    // @ts-ignore
    const parts = str.split('-');
    const wordToShow = parts[parts.length - 1];
    const modal = parts[0]

    // @ts-ignore
    return !!permissions.value.find((permission: string) => permission.toLowerCase().includes(`${wordToShow} ${modal.toLowerCase()}`))

}
export default defineNuxtRouteMiddleware(async(to, from) => {
    const foundPermission = findPermissionContainingBrowse(to.name);

    if (!foundPermission){
        return navigateTo('/401')
    }

})
