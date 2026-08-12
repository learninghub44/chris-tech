"use client"

import { MessageCircle, Send, Link2 } from "lucide-react"

interface SocialAffiliateLinksProps {
  theme?: "light" | "dark"
  /** Optional layout: "row" for inline footer use, "card" for a standalone highlighted block */
  variant?: "row" | "card"
  className?: string
}

// TODO: Replace these placeholder links with Chris Tech's real WhatsApp / Telegram / affiliate URLs.
export const SOCIAL_LINKS = {
  whatsapp: "https://wa.me/000000000000", // placeholder — swap in Chris Tech's real WhatsApp number
  telegram: "https://t.me/christech_placeholder", // placeholder — swap in Chris Tech's real Telegram channel
  affiliate: "https://track.deriv.com/_CHRISTECH_AFFILIATE_PLACEHOLDER_", // placeholder — swap in Chris Tech's real Deriv affiliate link
}

export function SocialAffiliateLinks({ theme = "dark", variant = "row", className = "" }: SocialAffiliateLinksProps) {
  const links = [
    {
      id: "whatsapp",
      label: "WhatsApp",
      href: SOCIAL_LINKS.whatsapp,
      icon: MessageCircle,
      color: theme === "dark" ? "text-emerald-400 hover:text-emerald-300" : "text-emerald-600 hover:text-emerald-700",
      bg: theme === "dark" ? "bg-emerald-500/10 border-emerald-500/20 hover:bg-emerald-500/20" : "bg-emerald-50 border-emerald-200 hover:bg-emerald-100",
    },
    {
      id: "telegram",
      label: "Telegram",
      href: SOCIAL_LINKS.telegram,
      icon: Send,
      color: theme === "dark" ? "text-sky-400 hover:text-sky-300" : "text-sky-600 hover:text-sky-700",
      bg: theme === "dark" ? "bg-sky-500/10 border-sky-500/20 hover:bg-sky-500/20" : "bg-sky-50 border-sky-200 hover:bg-sky-100",
    },
    {
      id: "affiliate",
      label: "Join Deriv (Affiliate)",
      href: SOCIAL_LINKS.affiliate,
      icon: Link2,
      color: theme === "dark" ? "text-amber-400 hover:text-amber-300" : "text-amber-600 hover:text-amber-700",
      bg: theme === "dark" ? "bg-amber-500/10 border-amber-500/20 hover:bg-amber-500/20" : "bg-amber-50 border-amber-200 hover:bg-amber-100",
    },
  ]

  if (variant === "card") {
    return (
      <div
        className={`rounded-xl border p-4 sm:p-5 ${theme === "dark" ? "bg-gray-900/40 border-white/8" : "bg-gray-50 border-gray-200"} ${className}`}
      >
        <p className={`text-xs sm:text-sm font-bold uppercase tracking-wide mb-3 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          Connect with Chris Tech
        </p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-xs sm:text-sm font-semibold transition-colors ${link.bg} ${link.color}`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {link.label}
              </a>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className={`flex flex-wrap items-center gap-2 sm:gap-3 ${className}`}>
      {links.map((link) => {
        const Icon = link.icon
        return (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            title={link.label}
            className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-[11px] sm:text-xs font-semibold transition-colors ${link.bg} ${link.color}`}
          >
            <Icon className="h-3.5 w-3.5 shrink-0" />
            <span className="hidden sm:inline">{link.label}</span>
          </a>
        )
      })}
    </div>
  )
}
