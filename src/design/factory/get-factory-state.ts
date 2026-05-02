import { BRAND_PACKS } from '@/design/factory/brand-packs'
import { SITE_FACTORY_RECIPE } from '@/config/site.factory'
import { SITE_RECIPE } from '@/config/site.recipe'
import { THEME_PACKS } from '@/design/factory/theme-pack-data'
import { getProductKind } from '@/design/factory/get-product-kind'
import type { SiteFactoryRecipe } from '@/design/factory/types'
import type { BrandPack } from '@/design/factory/types'

type FactoryState = {
  recipe: SiteFactoryRecipe
  brandPack: BrandPack
  productKind: 'directory' | 'editorial' | 'visual' | 'curation'
  siteRecipe: typeof SITE_RECIPE
  themePack: typeof THEME_PACKS[keyof typeof THEME_PACKS]
}

// Cache the result to ensure consistency across server and client
let cachedState: FactoryState | null = null

export function getFactoryState(): FactoryState {
  // Return cached result if available to ensure server/client consistency
  if (cachedState) {
    return cachedState
  }

  const themePack = THEME_PACKS[SITE_RECIPE.themePack]
  
  // Ensure SITE_RECIPE values take precedence for consistency
  const recipe: SiteFactoryRecipe = {
    brandPack: SITE_RECIPE.themePack ? themePack.brandPack : SITE_FACTORY_RECIPE.brandPack,
    navbar: SITE_RECIPE.navbarTemplate || themePack.navbar || SITE_FACTORY_RECIPE.navbar,
    footer: SITE_RECIPE.footerTemplate || themePack.footer || SITE_FACTORY_RECIPE.footer,
    homeLayout: SITE_RECIPE.homepageTemplate || themePack.homeLayout || SITE_FACTORY_RECIPE.homeLayout,
    motionPack: SITE_RECIPE.motionPack || themePack.motionPack || SITE_FACTORY_RECIPE.motionPack,
    primaryTask: SITE_RECIPE.primaryTask || SITE_FACTORY_RECIPE.primaryTask,
    enabledTasks: SITE_RECIPE.enabledTasks || SITE_FACTORY_RECIPE.enabledTasks,
    taskLayouts: {
      ...SITE_FACTORY_RECIPE.taskLayouts,
      ...themePack.defaultTaskTemplates,
      ...SITE_RECIPE.taskTemplates,
    },
  }

  const brandPack = BRAND_PACKS[recipe.brandPack as keyof typeof BRAND_PACKS] || BRAND_PACKS['directory-clean']
  const productKind = getProductKind(recipe)

  cachedState = {
    recipe,
    brandPack,
    productKind,
    siteRecipe: SITE_RECIPE,
    themePack,
  }

  return cachedState
}
