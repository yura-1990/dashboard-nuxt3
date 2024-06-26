import { useAuthStore } from "~/store/useAuthStore";
import { storeToRefs } from 'pinia'
import type {RouteRecordName} from "vue-router";

const {  permissions } = storeToRefs(useAuthStore());
function findPermissionContainingBrowse(str: RouteRecordName | null | undefined) {
    // @ts-ignore

    return permissions.value.find((permission: string) => permission.toLowerCase().includes('browse') && permission.toLowerCase().includes(str.toLowerCase()));

}
export default defineNuxtRouteMiddleware(async(to, from) => {
    const foundPermission = findPermissionContainingBrowse(to.name);

    if (!foundPermission){
        return navigateTo('/401')
    }

})
